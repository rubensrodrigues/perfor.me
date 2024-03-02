export class AppConstants {
  public static get baseUrl()       : string {return "http://localhost:8080/api"}
  public static get loginUrl()      : string {return this.baseUrl+"/auth/login"}
  public static get refreshToken()  : string {return this.baseUrl+"/auth/refresh-token"}
  public static get usersUrl()      : string {return this.baseUrl+"/users"}
  public static get tokenName()     : string {return "PerfoMEToken"}
}
