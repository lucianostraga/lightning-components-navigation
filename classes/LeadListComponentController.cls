public class LeadListComponentController {

    @AuraEnabled
    public static List<Lead> getLeads() {
        return [SELECT Name, Id, Status
                FROM Lead
                WHERE STATUS != 'Closed - Converted'
                ORDER BY STATUS
                LIMIT 20];
    }
}