/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import InlineEditorBase from "@ckeditor/ckeditor5-editor-inline/src/inlineeditor";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import ListStyle from "@ckeditor/ckeditor5-list/src/liststyle.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
export default class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
InlineEditor.builtinPlugins = [
  Essentials,
  Alignment,
  Bold,
  Italic,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  Link,
  List,
  ListStyle,
  Paragraph,
  Underline,
];

// Editor configuration.
InlineEditor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "alignment",
      "bold",
      "italic",
      "underline",
      "fontFamily",
      "fontSize",
      "fontColor",
      "fontBackgroundColor",
      "link",
      "bulletedList",
      "numberedList",
      "undo",
      "redo",
    ],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "en",
};
