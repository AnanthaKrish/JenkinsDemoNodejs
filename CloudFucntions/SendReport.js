/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
var request = require('request');
var openwhisk = require('openwhisk');
async function main(params) {

    console.log(params.message);
    console.log(params.status);
    
    var resultJson = {};
    var hasData = false;
    var whisk = openwhisk();
    // Cloudant
    var actionName = '/whisk.system/cloudant/read'
    const blocking = true, result = true
    
    if (params.status) {
        var apikey = "Add your service APIKey";
        var appId = "servce app GUID";
        var apiHost = "imfpush.eu-gb.bluemix.net"
        
        const gcmPayload = {
            collapseId:params.tag
        }

        const name = 'push-notifications/send-message'
        var message = params.message
        var title = "New status for build:#" + params.idValue + " "+ params.status
        const paramsJson = {
            appId:appId,
            apikey:apikey,
            messageText:message,
            apiHost:apiHost,
            gcmPayload:gcmPayload,
            gcmTitleKey:title,
            apnstitle: title,
            apnsCollapseId: params.tag
        };
        return whisk.actions.invoke({name, blocking, result,params:paramsJson});   
    } else {
        return { message: 'No action to perform' };
    }
     
     
    
}