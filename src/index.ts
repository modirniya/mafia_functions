import * as functions from "firebase-functions";
import {DataContainer} from "./data/model/data_container";
import {ContainerCategory} from "./constant/enums";
import {DataProvider} from "./data/provider/data_provider";

const cors = require('cors')({origin: true});

exports.authIdToUsername = functions.https.onRequest(
    (request, response) => {
        cors(request, response, async () => {
            let container = DataContainer.fromRequest(ContainerCategory.Username, request);
            let result = await new DataProvider(container).process();
            response.status(result.code).send(result.value);
        });
    }
)

exports.usernameToProfile = functions.https.onRequest(
    (request, response) => {
        cors(request, response, async () => {
            let container = DataContainer.fromRequest(ContainerCategory.Profile, request);
            let result = await new DataProvider(container).process();
            response.status(result.code).send(result.value);
        });
    }
)