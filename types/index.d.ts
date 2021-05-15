/*
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

// Minimum TypeScript Version: 3.0

import { DesignToken, DesignTokens } from "./DesignToken";
import { FileHeader } from "./FileHeader";
import { TransformedToken, TransformedTokens } from "./TransformedToken";
import { Transform } from "./Transform";
import { Filter } from "./Filter";
import { Format } from "./Format";
import { TransformGroup } from "./TransformGroup";
import { Action } from "./Action";
import { Parser } from "./Parser";
import { Config } from "./Config";
import { FormatHelpers } from "./FormatHelpers";

export { File } from "./File";
export { Options } from "./Options";
export { FileHeader };
export { TransformedToken, TransformedTokens };
export { Platform } from "./Platform";
export { Transform };
export { Filter };
export { Format };
export { Dictionary } from "./Dictionary";
export { TransformGroup };
export { Action };
export { Parser };
export { Config };
export { FormatHelpers };

import { Named, Keyed } from "./_helpers";

// aliased for backwards compatibility
export type Property = DesignToken;
export type Properties = DesignTokens;
export type Prop = TransformedToken;

export interface Core {
  VERSION: string;
  tokens: DesignTokens | TransformedTokens;
  allTokens: TransformedTokens[];
  properties: Properties;
  allProperties: Prop[];
  options: Config;

  transform: Keyed<Transform>;
  transformGroup: Keyed<TransformGroup>;
  format: Keyed<Format>;
  action: Keyed<Action>;
  filter: Keyed<Filter>;
  fileHeader: Keyed<FileHeader>;
  parsers: Parser[];

  formatHelpers: FormatHelpers;

  registerTransform(this: Core, transform: Named<Transform>): this;
  registerTransformGroup(
    this: Core,
    transformGroup: Named<TransformGroup>
  ): this;
  registerFormat(this: Core, format: Named<Format>): this;
  registerTemplate(this: Core, template: Named<{ template: string }>): this;
  registerAction(this: Core, action: Named<Action>): this;
  registerFilter(this: Core, filter: Named<Filter>): this;
  registerParser(this: Core, parser: Parser): this;

  exportPlatform(this: Core, platform: string): TransformedTokens;
  buildPlatform(this: Core, platform: string): this;
  buildAllPlatforms(this: Core): this;

  cleanPlatform(this: Core, platform: string): this;
  cleanAllPlatforms(this: Core): this;

  extend(this: Core, options: string | Config): this;
}

declare var StyleDictionary: StyleDictionary.Core;
export default StyleDictionary;
export as namespace StyleDictionary;
