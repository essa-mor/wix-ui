import * as React from "react";
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
} from "wix-storybook-utils/Sections";
import {
  AddItemMedium,
  BreadcrumbsChevronRight,
  CheckboxChecked,
  DragAndDropLarge,
  FaceSmiling30,
  Help24,
} from "../../src/system/dist";
import Sizes from "./Sizes";
import CategoryList from "../components/category-list";
import HeaderIcons from "../components/header-icons";
import IconsExample from "../components/icons-example";
import systemIconsMetadata from "../../src/system/metadata";
import * as iconComponents from "../../src/system/dist";
import { IconMetadata } from "../../src/types";
import { SystemTableRow, IconDescriptor } from "../types";
import API_Table from "../APITable";

// Returns a list of unique size keys
const getIconSizeKeys = (iconsMetadata: Array<IconMetadata>) => {
  const iconSizeKeys = new Set<string>();
  for (const icon of iconsMetadata) {
    const { sizes } = icon;
    for (const size in sizes) {
      iconSizeKeys.add(`sizes.${size}`);
    }
  }

  return Array.from(iconSizeKeys);
};

const mapIconToRow = ({
  title,
  sizes,
  description,
}: IconMetadata): SystemTableRow => {
  const iconDescriptors: Array<IconDescriptor> = [];
  for (const [size, name] of Object.entries(sizes)) {
    const Icon = iconComponents[name];
    iconDescriptors.push({
      size,
      name,
      Icon,
    });
  }
  return [title, <Sizes sizes={iconDescriptors} />, description];
};

const tableHeaderTitles = ["Icon Name", "Sizes", "Use for"];

const iconSizeKeys = getIconSizeKeys(systemIconsMetadata);
const searchKeys = ["title", ...iconSizeKeys, "tags", "aliases"];

export default {
  category: "Icons",
  storyName: "System Icons",
  component: () => (
    <IconsExample dataHook="icon-list" {...{ iconComponents }} />
  ),

  sections: [
    header({
      component: (
        <HeaderIcons>
          <AddItemMedium />
          <BreadcrumbsChevronRight />
          <CheckboxChecked />
          <DragAndDropLarge />
          <FaceSmiling30 />
          <Help24 />
        </HeaderIcons>
      ),
      sourceUrl:
        "https://github.com/wix/wix-ui/tree/master/packages/wix-ui-icons-common/src/system",
    }),

    tabs([
      tab({
        title: "Icon List",
        sections: [
          description({
            title: "Purpose of Use",
            text: "System icons are used to...",
          }),
          description({
            title: "Adding New Icons",
            text:
              "WSR icons are owned by Wix Style Team.<br/>If you can’t find an icon for your needs or some adjustments need to be made to existing ones, please submit Icon Request.",
          }),
          importExample(
            "import AddItemLarge from 'wix-ui-icons-common/system/AddItemLarge';"
          ),
          divider(),
          title("Categories"),
          description({
            text:
              "The usage of each icon type is determined by intention and size. Icons should be used strictly according to the description.",
          }),
          <CategoryList
            dataHook="icon-list"
            iconsMetadata={systemIconsMetadata}
            {...{
              tableHeaderTitles,
              searchKeys,
              mapIconToRow,
            }}
          />,
        ],
      }),
      tab({
        title: "API",
        sections: [description({ title: "Props", text: API_Table })],
      }),
    ]),
  ],
};
