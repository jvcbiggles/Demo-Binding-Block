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


//Lucid_LucidBinding_0_23_1933605140231557929553744339
/*lucidcode*/
$(/*luc!d_element*/document/*luc!d_element_end*/).bind(/*luc!d_event*/'ready'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('1933605140231557929553744339',event);/*luc!d_debug_end*/
	/*luc!d_function*/mouseClick(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid


});

//Lucid_LucidBindingAction_18_156_6949080921304229858825638477
function mouseClick(senderObject, event) {
	lucidDebug('6949080921304229858825638477',event);
/*lucidcode*/
$(/*luc!d_bindto*/document.body/*luc!d_bindto_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {	/*luc!d_function*/shakeUpDown(this,event);/*luc!d_function_end*/
    });
/*lucidcode_end*/

/*luc!d_callback*/keyDown(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidJQueryUIEffectAction_147_253_9489707552137916663268973437
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

//Lucid_LucidJQueryUIEffectAction_26_375_6644134922030079291322460301
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

//Lucid_LucidBindingAction_18_260_1680652302870830723950907156
function keyDown(senderObject, event) {
	lucidDebug('1680652302870830723950907156',event);
/*lucidcode*/
$(/*luc!d_bindto*/document.body/*luc!d_bindto_end*/).bind(/*luc!d_event*/'keydown'/*luc!d_event_end*/, function(event) {	/*luc!d_function*/shakeLeftRight(this,event);/*luc!d_function_end*/
    });
/*lucidcode_end*/

}
//EndLucid

