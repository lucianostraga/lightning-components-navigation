public class NavigationComponentController {
	@AuraEnabled
    public static Id getRecordId() {
        return UserInfo.getUserId();
    }
    
    @AuraEnabled
    public static List<ListView> getListViews() {
        return [SELECT Id, Name FROM ListView WHERE SobjectType = 'Lead'];
    }
    
    @AuraEnabled
    public static List<Lead> getSomeLeads() {
        return [SELECT Id  FROM Lead LIMIT 10];
    }
}