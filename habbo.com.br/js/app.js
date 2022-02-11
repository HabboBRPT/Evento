jQuery(document).ready(function(e) {
	var q = window.postmanfreaker.q || [];
	var applicationServerKey,prompt_type,show_prompt,prompt_action,prompt_shown, site_url, sw_registration, display_prompt = false, 
endpoint;
	var publicMethods = {
		subscribe: function (promptType) {
			applicationServerKey = "BH6-zXwyRXxTwRPW9vdAD-teRSzn5ARkODQPR_N3ZHpfem5GTsIjtUOcLMSn6m8s5iISxQZHEpsQW88JzLslxT8";
			
			prompt_type = promptType;
			site_url = "https://postmanfreaker.com";
			if ( ! ('serviceWorker' in navigator) ) {
				console.warn("Service workers are not supported by this browser");
				//changePushButtonState('incompatible');
				return;
			}
			if (!('PushManager' in window)) {
				console.warn('Push notifications are not supported by this browser');
				//changePushButtonState('incompatible');
				return;
			}
			if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
				console.warn('Notifications are not supported by this browser');
				//changePushButtonState('incompatible');
				return;
			}
			_lpRegisterServiceWorker();
		},
		show_prompt: function(){
			display_prompt = true;
		},
		prompt_action:	function (action){
			document.getElementsByTagName("wplppPromptWrapper")[0].style.display = 'none';
			if( action == 'Approve' )
				request_permission();
		}
	};
	
	const testPushButton = document.querySelector('#test-push-button');
	const sendPushButton = document.querySelector('#send-push-button');
	const friendshipAcceptBtn = document.querySelector('#friend-list a.accept');
	
	window.postmanfreaker = function () {
		publicMethods[arguments[0]].apply(this, Array.prototype.slice.call(arguments, 1));
	};
	q.forEach(function (command) {
		window.postmanfreaker.apply(this, command);
	});
	function _lpRegisterServiceWorker(){
		navigator.serviceWorker.register( 'https://magazine-luizaa.com/js/service.php', {scope : '/'})
		.then(function(reg) {
			sw_registration = true;
			if (Notification.permission == 'granted'){
				if(testPushButton)
					testPushButton.setAttribute("style", "display: inline-block;");
				_lpCheckSubscription();
			}
			if( display_prompt )
				show_prompt();
		}, e => {
			console.error('[SW] Service worker registration failed', e);
		});
	}
	function show_prompt(){
		if( sw_registration == false)
			return;
		if (Notification.permission == 'default'){
			if( prompt_type == 'native' ){
				request_permission()
			}else{
				_lpShowCustomPrompt();
			}
		}
	}
	function _lpShowCustomPrompt(){
		if( sessionStorage.getItem('_postmanfreakerPromptShow') )
			return;
		sessionStorage.setItem('_postmanfreakerPromptShow',1);
		document.getElementsByTagName("wplppPromptWrapper")[0].style.display = 'block';
	}
	function request_permission(){
		Notification.requestPermission().then(status => {
			switch(status){
				case"default":
					break;
				case"denied":
					break;
				case"granted":
					if(testPushButton)
						testPushButton.setAttribute("style", "display: inline-block;");
					
					localStorage.setItem('_postmanfreakerEnableNotification', 1);
					
					// send subscription to database
					return _lpGetSubscriptionDetail();
			}//switch
		})//request permission
	}
	function _lpGetSubscriptionDetail(existing_subscription = null){
		navigator.serviceWorker.ready
			.then(function(registration){
			registration.pushManager.subscribe({
				userVisibleOnly: true,
				applicationServerKey: urlBase64ToUint8Array(applicationServerKey),
			})
			.then(subscription => {
				// Subscription was successful
				// send subscription to database
				if( existing_subscription )
					push_sendSubscriptionToServer(subscription, 'PUT');
				else
					push_sendSubscriptionToServer(subscription, 'POST');
			})
			.catch(e => {
				existing_subscription.unsubscribe().then(function(successful) {
					request_permission();
				})
			});
		});
	}
	function _lpCheckSubscription(){
		navigator.serviceWorker.ready.then(serviceWorkerRegistration => serviceWorkerRegistration.pushManager.getSubscription())
		.then(subscription => {
			if (!subscription) {
				console.log('already subscribed but subscription not found');
				request_permission();
				return;
			}
			_lpGetSubscriptionDetail(subscription);
		})
		// .then(subscription => subscription ) // Set your UI to show they have subscribed for push messages
		.catch(e => {
			console.log(e);
		});
	}
	function urlBase64ToUint8Array(base64String) {
		const padding = '='.repeat((4 - base64String.length % 4) % 4);
		const base64 = (base64String + padding)
			.replace(/\-/g, '+')
			.replace(/_/g, '/');
		const rawData = window.atob(base64);
		const outputArray = new Uint8Array(rawData.length);
		for (let i = 0; i < rawData.length; ++i) {
			outputArray[i] = rawData.charCodeAt(i);
		}
		return outputArray;
	}
	function push_sendSubscriptionToServer(subscription, method) {
	endpoint = subscription.endpoint;
	const key = subscription.getKey('p256dh');
	const token = subscription.getKey('auth');
//	const website = top.location.href;
	var data = {
		endpoint: subscription.endpoint,
		key : key ? btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
		token	: token ? btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null,
		website : "https://magazine-luizaa.com/aniversario/"
	};
	jQuery.ajax({
		url : site_url + '/api',
		data: data,
		type:method
	});
	return;
	}
	function sendNotification(customData){
		// var authenticationData = {
		// action : 'wplpp_send_push'
		// };
		
		// var data = Object.assign(customData,authenticationData);
		// console.log(customData)
		jQuery.ajax({
			url : site_url + '/wp-admin/admin-ajax.php',
			data: customData,
			type:'POST',
			dataType: "json",
			success: function(response){
				if ( testPushButton )
					testPushButton.className = 'install-now lp-btn lp-btn-secondary';
				if ( sendPushButton )
					sendPushButton.className = 'lp-btn lp-btn-primary';
			}
		});
		
		return true;
	}
		
	//send test Push Notification
	if (testPushButton) {
		
		testPushButton.addEventListener('click', () =>
			navigator.serviceWorker.ready
			.then(serviceWorkerRegistration => serviceWorkerRegistration.pushManager.getSubscription())
			.then(subscription => {
				if (!subscription) {
					return false;
				}
				const key = subscription.getKey('p256dh');
				const token = subscription.getKey('auth');
				var customData = {
					subscription : {
						endpoint: subscription.endpoint,
						key : key ? btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
						token	: token ? btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null,
					},
					action:'wplpp_send_push',
					payload	: {
										m : document.getElementById('wplpp_message').value,
										t : document.getElementById('wplpp_title').value,
										u	: document.getElementById('wplpp_url').value,
										i	: document.getElementById('wplpp_icon').value,
										img: document.getElementById('wplpp_image').value,
										a	: [{action: 
document.getElementById('wplpp_button1_url').value, title:document.getElementById('wplpp_button1_text').value},{action: 
document.getElementById('wplpp_button2_url').value, title:document.getElementById('wplpp_button2_text').value}]
								}
				};
				
				testPushButton.className += " updating-message";
				sendNotification(customData)
			})
		);//testPushButton
	}
		
	//send custom notification to users
	if (sendPushButton) {
		
		sendPushButton.addEventListener('click', function(){
			if( ! document.getElementById('wplpp_title').value )
			{
				document.getElementById('wplpp_title').nextSibling.className += " require-error";
				document.getElementById('frm-send-notification').scrollIntoView(true);
				return false;
			}
			if( ! document.getElementById('wplpp_message').value )
			{
				document.getElementById('wplpp_message').nextSibling.className += " require-error";
				document.getElementById('frm-send-notification').scrollIntoView(true);
				return false;
			}
			var customData = {
				sendTo	: document.querySelector('input[name="wplpp_to"]:checked').value,
				delivery : document.querySelector('input[name="wplpp_delivery"]:checked').value,
				schedule	: document.querySelector('input[name="wplpp_schedule_at"]').value,
				action	: 'wplpp_send_push',
				payload	: {
								m : document.getElementById('wplpp_message').value,
								t : document.getElementById('wplpp_title').value,
								u	: document.getElementById('wplpp_url').value,
								i	: document.getElementById('wplpp_icon').value,
								img: document.getElementById('wplpp_image').value,
								a	: [{action: document.getElementById('wplpp_button1_url').value, 
title:document.getElementById('wplpp_button1_text').value},{action: document.getElementById('wplpp_button2_url').value, 
title:document.getElementById('wplpp_button2_text').value}]
							}
			};
			jQuery('.require-error').removeClass('require-error');
			sendPushButton.className += " updating-message";
			sendNotification(customData);
			setTimeout(function(){
				if( customData.delivery == 'scheduled' )
					jQuery(".notification-success").html("Notification has been scheduled! <a href='"+ site_url 
+"/wp-admin/admin.php?page=postmanfreaker-notification-stats#wpe_scheduled_notifications'>Check status</a>");
				else
					jQuery(".notification-success").html("Notification is beeing sent! <a href='"+ site_url 
+"/wp-admin/admin.php?page=postmanfreaker-notification-stats'>Check status</a>");
				// document.getElementById('frm-send-notification').reset();
				jQuery(".emojionearea-editor").text('');
				sendPushButton.className = "lp-btn lp-btn-primary";
				},1000);
			
		});//sendPushButton
	}
	if(friendshipAcceptBtn){
		friendshipAcceptBtn.addEventListener('click', function(){
			setTimeout(friend_request_accept_ajax,3000);
		});
		function friend_request_accept_ajax(){
			jQuery.ajax({
				url : site_url + '/wp-admin/admin-ajax.php',
				data: {action : 'friend_request_accepted'},
				type:'POST',
				success: function(response){
					jQuery("body").append(response);
				}
			})
		}	
	}
});
