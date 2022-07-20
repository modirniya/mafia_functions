import * as functions from "firebase-functions";
import {DataContainer} from "./data/model/data_container";
import {ContainerCategory} from "./constant/enums";
import { UuidService } from "./data/service/uuid_service";
import { ProfileService } from "./data/service/profile_service";

const cors = require('cors')({origin: true});

exports.uuid = functions.https.onRequest(
    (request, response) => {
        cors(request, response, async () => {
            let container = DataContainer.fromRequest(ContainerCategory.Uuid, request);
            let result = await new UuidService(container).process();
            response.status(result.code).send(result.value);
        });
    }
)

exports.profile = functions.https.onRequest(
    (request, response) => {
        cors(request, response, async () => {
            let container = DataContainer.fromRequest(ContainerCategory.Profile, request);
            let result = await new ProfileService(container).process();
            response.status(result.code).send(result.value);
        });
    }
)