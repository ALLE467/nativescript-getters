import {
    TextBase
} from "@nativescript/core";

import { IGettersMethods } from "../models/getters-methods.model";

declare module "@nativescript/core/ui/text-base/text-base" { // before: declare module "tns-core-modules/ui/text-base/text-base"

    interface TextBase extends IGettersMethods {}

}
