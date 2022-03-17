import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import path from "path";

chai.use(chaiHttp);

if (!process.env.DB_HOST) {
    require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
}

const HOST = `http://localhost:${5000}`;

describe("breedingNekoApi", () => {
    it("Get Breeding Neko and Update Status", (done) => {
        chai.request(HOST).get("/get").end((err, res) => {
            console.log("Response", res)
            expect(res.status).should.be.eql(200);
            done();
        });
    })
})