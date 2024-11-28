export default abstract class BaseService {
    protected async handleError(error: any): Promise<never> {
        console.error('Service Error:', error);
        throw error;
    }

    protected validate(data: any, rules: Record<string, any>): boolean {
        // Add validation logic here
        return true;
    }
}
