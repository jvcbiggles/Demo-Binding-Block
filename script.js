/*
Lucid Generated Code
*/
function lucidDebug(uid,event) {
	try{
event.allAttributes_Lucid = "";
 for(var propertyName in event) {event.allAttributes_Lucid += propertyName+",";}		window.LucidWebPreviewDelegate.javascriptFunctionEntered_withEvent_(uid,event);
	} catch(err) { }
}


function lucidLog(uid,value) {
	try{
		console.log(value);
		window.LucidWebPreviewDelegate.lucidLog_withValue_(uid,value);
	} catch(err) { }
}




$(document).ready(function() {


//Lucid_LucidBinding_0_23_1105922042760795109565762725
/*lucidcode*/
$(/*luc!d_element*/'DIV.#startAnimate'/*luc!d_element_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('1105922042760795109565762725',event);/*luc!d_debug_end*/
	/*luc!d_function*/shakeUpDown(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid

//Lucid_LucidBinding_100_23_984879294623431821977323785
/*lucidcode*/
$(/*luc!d_element*/'TT.#changeBinding'/*luc!d_element_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('984879294623431821977323785',event);/*luc!d_debug_end*/
	/*luc!d_function*/removeBinding(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid

//Lucid_LucidBinding_200_23_1815963872867205540151998591
/*lucidcode*/
$(/*luc!d_element*/'TT.#revertBinding'/*luc!d_element_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('1815963872867205540151998591',event);/*luc!d_debug_end*/
	/*luc!d_function*/removeBinding1(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid


});

//Lucid_LucidJQueryUIEffectAction_177_501_9489707552137916663268973437
function shakeUpDown(senderObject, event) {
	lucidDebug('9489707552137916663268973437',event);
/*lucidcode*/
$(/*luc!d_element*/'DIV.#bluebox'/*luc!d_element_end*/).effect(/*luc!d_effect*/'shake'/*luc!d_effect_end*/,
{/*luc!d_prop_0*/'times'/*luc!d_prop_0_end*/: /*luc!d_val_0*/'3'/*luc!d_val_0_end*/,
/*luc!d_prop_1*/'distance'/*luc!d_prop_1_end*/: /*luc!d_val_1*/'10'/*luc!d_val_1_end*/,
/*luc!d_prop_2*/'direction'/*luc!d_prop_2_end*/: /*luc!d_val_2*/'down'/*luc!d_val_2_end*/
},/*luc!d_duration*/200/*luc!d_duration_end*/,/*luc!d_callback*/null/*luc!d_callback_end*/);
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidJQueryUIEffectAction_177_391_6644134922030079291322460301
function shakeLeftRight(senderObject, event) {
	lucidDebug('6644134922030079291322460301',event);
/*lucidcode*/
$(/*luc!d_element*/'DIV.#bluebox'/*luc!d_element_end*/).effect(/*luc!d_effect*/'shake'/*luc!d_effect_end*/,
{/*luc!d_prop_0*/'times'/*luc!d_prop_0_end*/: /*luc!d_val_0*/'3'/*luc!d_val_0_end*/,
/*luc!d_prop_1*/'distance'/*luc!d_prop_1_end*/: /*luc!d_val_1*/'10'/*luc!d_val_1_end*/,
/*luc!d_prop_2*/'direction'/*luc!d_prop_2_end*/: /*luc!d_val_2*/'left'/*luc!d_val_2_end*/
},/*luc!d_duration*/200/*luc!d_duration_end*/,/*luc!d_callback*/null/*luc!d_callback_end*/);
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidBindingAction_176_287_1982173405474601924880271710
function binding(senderObject, event) {
	lucidDebug('1982173405474601924880271710',event);
/*lucidcode*/
$(/*luc!d_bindto*/'DIV.#startAnimate'/*luc!d_bindto_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {	/*luc!d_function*/shakeLeftRight(this,event);/*luc!d_function_end*/
    });
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidCustomAction_176_175_211982586511596093251139828750
function removeBinding(senderObject, event) {
	lucidDebug('211982586511596093251139828750',event);
/*lucidcode*/$('DIV.#startAnimate').unbind('click');/*lucidcode_end*/

/*luc!d_callback*/binding(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCustomAction_337_174_190862112212319622151699106778
function removeBinding1(senderObject, event) {
	lucidDebug('190862112212319622151699106778',event);
/*lucidcode*/$('DIV.#startAnimate').unbind('click');/*lucidcode_end*/

/*luc!d_callback*/binding_1(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidBindingAction_337_286_177054273019782502781110599492
function binding_1(senderObject, event) {
	lucidDebug('177054273019782502781110599492',event);
/*lucidcode*/
$(/*luc!d_bindto*/'DIV.#startAnimate'/*luc!d_bindto_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {	/*luc!d_function*/shakeUpDown(this,event);/*luc!d_function_end*/
    });
/*lucidcode_end*/

}
//EndLucid

