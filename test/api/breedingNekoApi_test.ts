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
            console.log("response", res.body)
            expect(res.status).to.be.eql(400);
            done();
        });
    })
})