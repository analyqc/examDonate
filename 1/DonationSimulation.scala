import io.gatling.core.Predef._
import io.gatling.http.Predef._

class DonationSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("https://donate-dev.gettrx.com")
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .header("Content-Type", "application/x-www-form-urlencoded")

  val scn = scenario("DonationSimulation")
    .exec(http("Open donation page")
      .get("/73e59423-d4f2-4a38-bdee-32c96a77f2b7/cause/abaf128f-53a8-4b3b-ac84-f06e4b875b69")
      .check(status.is(200)))
    .pause(1)
    .exec(http("Submit donation")
      .post("/Cause/ProcessTransaction")
      .formParam("donorName", "Jhon Doe")
      .formParam("donorAddress", "970 W 190TH STREET STE 650")
      .formParam("donorCity", "TORRANCE")
      .formParam("donorState", "CA")
      .formParam("donorZip", "90502")
      .formParam("donorEmail", "jhondoe@gmail.com")
      .formParam("donorPhone", "8887751500")
      .formParam("giftAmount", "50.0000")
      .formParam("includeFees", "true")
      .formParam("tokenId", "5636443268315173")
      .formParam("hash", "cd8f29e4be9d29209f54ca186b8c4e7a")
      .formParam("publicMerchantKey", "73e59423-d4f2-4a38-bdee-32c96a77f2b7")
      .formParam("causeGuid", "abaf128f-53a8-4b3b-ac84-f06e4b875b69")
      .formParam("causeName", "")
      .formParam("isRecurring", "false")
      .formParam("feePercentage", "0.0279")
      .formParam("feePerItem", "0")
      .formParam("googleReCaptchaToken", "03AFcWeA4ouxDO65_fx9KtXSP8WhW9r2EPnv2iyalHaFB75Ihn37Ry24yW-hdxqPo21Q9YL9W1YIMIhnR694Gsf-2_KSmkyOTMlz34IQpLRXNU7nztTiOOkaXhuqwgEN9JY7N3P1CSzP5_gv5a4_rwjw8kjoHctJNH6hzlL8T38vygzZWRDb6y0aaSf1HRyNsNa7tFGxuOYljc1KV0tNuJFAxxdHAb-hUY3IyJEA2adXTH3rEl-aXx5QWxdBJxu-Oz7wEdSxS_37Aj2yqEZ0s5d7JOq5mmvLHRvs6Ak3Tbd0hA8FaBokURXi6T1d8WYO_jt-WCoNWCtqU4bQRt8MKXs4D4WAD-CsHXZuDxZjx7q23Nz0XFE6PU3dW2xIwBG0UYTWKJ5owKnR_M2x2O_67oyj_ItwtKyoxVv4DBDgunpz4AhtpDzGdnC2FUnRUdFg_-p0nu5XrdYNlnhK58AYG0KK_ZN6bPz1fR0yG4BIyYhKltU9C14xeAU2jrRBYB2zRbyrKpSFVKoyk_f_ZsRHJRPlY3XX1xavpIFcWRdmL6RxqY87LJQIBYOVU")
      .formParam("DeviceFingerprintRequestId", "J3FdSP8ZTE")
      .formParam("additionalNotes", "")
      .check(status.is(200)))
    .pause(5)
	//I need more information to generate hash,tokenid, googleReCaptchaToken, DeviceFingerprintRequestId
  setUp(
    scn.inject(
      rampConcurrentUsers(20).to(20).during(5),  // 20 users in 5 seconds
      rampConcurrentUsers(40).to(40).during(3)   // 40 users in 3 seconds
    )
  ).protocols(httpProtocol)
}
