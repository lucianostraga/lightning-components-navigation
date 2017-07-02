({
    doInit : function(component, event, helper) {
        var req = component.get("c.getLeads");

        req.setCallback(this, function(action) {
            if (action.getState() === "SUCCESS") {
                component.set('v.leads', action.getReturnValue());
            }else if (state === "ERROR") {}
        });
		$A.enqueueAction(req);
    },
    
    naviRec : function(component, event, helper) {
        var idx = event.target.id;
        console.log(idx);
        
        var sObectEvent = $A.get("e.force:navigateToSObject");
                                sObectEvent .setParams({
                                "recordId": idx  ,
                                "slideDevName": "detail"
                              });
        sObectEvent.fire(); 
    }
})