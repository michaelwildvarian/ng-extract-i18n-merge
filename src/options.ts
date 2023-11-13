import {JsonObject} from '@angular-devkit/core';

export interface Options extends JsonObject {
    format: 'xlf' | 'xlif' | 'xliff' | 'xlf2' | 'xliff2' | null
    outputPath: string | null,
    sourceFile: string | null,
    targetFiles: string[],
    sourceLanguageTargetFile: string | null,
    removeIdsWithPrefix: string[] | null,
    fuzzyMatch: boolean,
    resetTranslationState: boolean,
    prettyNestedTags: boolean,
    collapseWhitespace: boolean,
    trim: boolean,
    includeContext: boolean | 'sourceFileOnly',
    newTranslationTargetsBlank: boolean | 'omit',
    sort: 'idAsc' | 'stableAppendNew' | 'stableAlphabetNew',
    buildTarget: string,
    /** @deprecated Use {@link buildTarget} for Angular 17 and newer. */
    browserTarget: string,
    builderI18n: string,
    verbose: boolean
}
