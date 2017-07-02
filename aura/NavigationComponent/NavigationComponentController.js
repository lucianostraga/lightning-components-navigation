({
	doInit : function (component, event, helper) { 
        
        var req = component.get("c.getRecordId");
        req.setCallback(this, function(action) {
            if (action.getState() === "SUCCESS") {
                component.set('v.someId', action.getReturnValue());
            }else if (state === "ERROR") {}
        });
		$A.enqueueAction(req);
        
        var req = component.get("c.getListViews");
        req.setCallback(this, function(action) {
            if (action.getState() === "SUCCESS") {
                component.set('v.leadViews', action.getReturnValue());
            }else if (state === "ERROR") {}
        });
		$A.enqueueAction(req);
        
        var req = component.get("c.getSomeLeads");
        req.setCallback(this, function(action) {
            if (action.getState() === "SUCCESS") {
                component.set('v.leadList', action.getReturnValue());
            }else if (state === "ERROR") {}
        });
		$A.enqueueAction(req);
    }, 
    
    goToRelativeURL : function (component, event, helper) {
        var urlEvent = $A.get("e.force:navigateToURL");
        var url = component.get("v.relativeUrl");
        urlEvent.setParams({
          "url": url
        });
        urlEvent.fire();
    },
    
    goToAbsoluteURL : function(component, event, helper) {
        var url = component.get("v.absoluteUrl");
    
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
          "url": url
        });
        urlEvent.fire();
    },
    
    goToComponent : function(component, event, helper) {
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef : "c:LeadListComponent"
            //componentAttributes: {
                //attributeName : component.get("v.SOME_ATTRIBUTE")
            //}
        });
        evt.fire();
    },
    
    goToRecord : function(component, event, helper) {
        //var recId = event.target.id;  FOR ORDINARY HTML TAGS WITH ID ATTRIBUTES
        
        var recId = component.get("v.someId");
        
        var sObectEvent = $A.get("e.force:navigateToSObject");
                                sObectEvent .setParams({
                                "recordId": recId,
                                "slideDevName": "detail"
                              });
        sObectEvent.fire(); 
    },
    
    goToListView : function(component, event, helper) {
        
        var listViews = component.get("v.leadViews");    
        
        var navEvent = $A.get("e.force:navigateToList");
            navEvent.setParams({
                "listViewId": listViews[0].Id,
                "listViewName": null,
                "scope": "Lead"
            });
        navEvent.fire();
    },
    
    goToRelatedList : function(component, event, helper) {
        
        var parentIds = component.get("v.leadList");
        
        var relatedListEvent = $A.get("e.force:navigateToRelatedList");
        relatedListEvent.setParams({
            "relatedListId": "OpenActivities",
            "parentRecordId": parentIds[0].Id
        });
        relatedListEvent.fire();
    },
    
    goToObjectHome : function(component, event, helper) {
        
        var homeEvent = $A.get("e.force:navigateToObjectHome");
        homeEvent.setParams({
            "scope": "Lead"
        });
        homeEvent.fire();
        }
})