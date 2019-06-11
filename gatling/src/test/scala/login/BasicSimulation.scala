package login

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class BasicSimulation extends Simulation {

  val httpProtocol = http
    .acceptHeader("application/json")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  val scn = scenario("Scenario")
    .exec(http("Move to Login").get("http://localhost:3000/"))
    .pause(1)
    .exec(http("Execute Login").post("http://localhost:3001/api/login").body(StringBody("""{ "usuario": { "nombre": "Pepe" } }""")).asJson)
    .pause(1)
    .exec(http("Move to Fabrica").get("http://localhost:3000/"))

  setUp(scn.inject(atOnceUsers(50)).protocols(httpProtocol))
}
