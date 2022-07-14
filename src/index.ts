import * as functions from "firebase-functions";
import {DataContainer} from "./data/model/data_container";
import {ContainerCategory} from "./constant/enums";
import {UsernameProvider} from "./data/provider/username_provider";
import {ProfileProvider} from "./data/provider/profile_provider";

const cors = require('cors')({origin: true});

exports.authIdToUsername = functions.https.onRequest(
    (request, response) => {
        cors(request, response, async () => {
            let container = DataContainer.fromRequest(ContainerCategory.Username, request);
            let result = await new UsernameProvider(container).process();
            response.status(result.code).send(result.value);
        });
    }
)

exports.usernameToProfile = functions.https.onRequest(
    (request, response) => {
        cors(request, response, async () => {
            let container = DataContainer.fromRequest(ContainerCategory.Profile, request);
            let result = await new ProfileProvider(container).process();
            response.status(result.code).send(result.value);
        });
    }
)