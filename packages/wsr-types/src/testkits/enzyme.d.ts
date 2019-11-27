declare module "wix-style-react/dist/testkit/enzyme" {
  import { ReactWrapper } from "enzyme";

  type EnzymeTestkitFactory<T extends __WSRTests.BaseDriver> = (
    params: EnzymeTestkitParams
  ) => T;

  type EnzymeUniTestkitFactory<T extends __WSRTests.BaseUniDriver> = (
    params: EnzymeTestkitParams
  ) => T;

  interface EnzymeTestkitParams {
    wrapper: ReactWrapper;
    dataHook: string;
  }

  export const loaderTestkitFactory: EnzymeTestkitFactory<__WSRTests.LoaderDriver>;
  export const textTestkitFactory: EnzymeTestkitFactory<__WSRTests.TextDriver>;
  export const buttonTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.ButtonUniDriver>;
  export const textButtonTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.TextButtonUniDriver>;
  export const emptyStateTestkitFactory: EnzymeTestkitFactory<__WSRTests.EmptyStateDriver>;
  export const headingTestkitFactory: EnzymeTestkitFactory<__WSRTests.HeadingDriver>;
  export const dropdownLayoutTestkitFactory: EnzymeTestkitFactory<__WSRTests.DropdownLayoutDriver>;
  export const labelTestkitFactory: EnzymeTestkitFactory<__WSRTests.LabelDriver>;
  export const checkboxTestkitFactory: EnzymeTestkitFactory<__WSRTests.CheckboxDriver>;
  export const inputTestkitFactory: EnzymeTestkitFactory<__WSRTests.InputDriver>;
  export const formFieldTestkitFactory: EnzymeTestkitFactory<__WSRTests.FormFieldDriver>;
  export const pageHeaderTestkitFactory: EnzymeTestkitFactory<__WSRTests.PageHeaderDriver>;
  export const pageTestkitFactory: EnzymeTestkitFactory<__WSRTests.PageDriver>;
  export const modalTestkitFactory: EnzymeTestkitFactory<__WSRTests.ModalDriver<
    import("enzyme").ReactWrapper
  >>;
  export const closeButtonTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.CloseButtonUniDriver>;
  export const iconButtonTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.IconButtonUniDriver>;
  export const skeletonTestkitFactory: EnzymeTestkitFactory<__WSRTests.SkeletonDriver>;
  export const filePickerTestkitFactory: EnzymeTestkitFactory<__WSRTests.FilePickerDriver>;
  export const sectionHelperTestkitFactory: EnzymeTestkitFactory<__WSRTests.SectionHelperDriver>;
  export const toggleButtonTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.ToggleButtonUniDriver>;
  export const modalPreviewLayoutTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.ModalPreviewLayoutUniDriver>;
  export const messageBoxFunctionalLayoutTestkitFactory: EnzymeTestkitFactory<__WSRTests.MessageBoxFunctionalLayoutDriver<
    import("enzyme").ReactWrapper
  >>;
  export const messageBoxMarketerialLayoutTestkitFactory: EnzymeTestkitFactory<__WSRTests.MessageBoxMarketerialLayoutDriver>;
  export const modalMobileLayoutTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.ModalMobileLayoutUniDriver>;
  export const modalSelectorLayoutTestkitFactory: EnzymeTestkitFactory<__WSRTests.ModalSelectorLayoutDriver>;
  export const genericModalLayoutTestkitFactory: EnzymeTestkitFactory<__WSRTests.GenericModalLayoutDriver>;
  export const selectorTestkitFactory: EnzymeTestkitFactory<__WSRTests.SelectorDriver>;
  export const radioGroupTestkitFactory: EnzymeTestkitFactory<__WSRTests.RadioGroupDriver>;
  export const radioButtonTestkitFactory: EnzymeTestkitFactory<__WSRTests.RadioButtonDriver>;
  export const fillButtonTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.FillButtonUniDriver>;
  export const tagTestkitFactory: EnzymeTestkitFactory<__WSRTests.TagDriver>;
  export const highlighterTestkitFactory: EnzymeTestkitFactory<__WSRTests.HighlighterDriver<
    ReactWrapper
  >>;
  export const stepperTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.StepperUniDriver>;
  export const segmentedToggleTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.SegmentedToggleUniDriver>;
  export const accordionTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.AccordionUniDriver>;
  export const breadcrumbsTestkitFactory: EnzymeTestkitFactory<__WSRTests.BreadcrumbsDriver>;
  export const imageViewerTestkitFactory: EnzymeTestkitFactory<__WSRTests.ImageViewerDriver<
    ReactWrapper
  >>;
  export const floatingNotificationTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.FloatingNotificationUniDriver>;
  export const socialPreviewTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.SocialPreviewUniDriver>;
  export const fillPreviewTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.FillPreviewUniDriver>;
  export const statisticsWidgetTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.StatisticsWidgetUniDriver>;
  export const thumbnailTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.ThumbnailUniDriver>;
  export const linearProgressBarTestkitFactory: EnzymeTestkitFactory<__WSRTests.LinearProgressBarDriver>;
  export const errorIndicatorTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.ErrorIndicatorUniDriver>;
  export const addItemTestkitFactory: EnzymeTestkitFactory<__WSRTests.AddItemDriver<
    ReactWrapper
  >>;
  export const inputWithOptionsTestkitFactory: EnzymeTestkitFactory<__WSRTests.InputWithOptionsDriver>;
  export const searchTestkitFactory: EnzymeTestkitFactory<__WSRTests.SearchDriver>;
  export const dropdownTestkitFactory: EnzymeTestkitFactory<__WSRTests.DropdownDriver>;
  export const dropdownBaseTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.DropdownBaseUniDriver>;
  export const counterBadgeTestkitFactory: EnzymeTestkitFactory<__WSRTests.CounterBadgeDriver>;
  export const autoCompleteTestkitFactory: EnzymeTestkitFactory<__WSRTests.AutoCompleteDriver>;
  export const dataTableTestkitFactory: EnzymeTestkitFactory<__WSRTests.DataTableDriver>;
  export const autoCompleteCompositeTestkitFactory: any;
  export const avatarTestkitFactory: any;
  export const badgeTestkitFactory: any;
  export const badgeSelectTestkitFactory: any;
  export const boxTestkitFactory: any;
  export const calendarTestkitFactory: any;
  export const calendarPanelTestkitFactory: any;
  export const calendarPanelFooterTestkitFactory: any;
  export const cardGalleryItemTestkitFactory: EnzymeUniTestkitFactory<__WSRTests.CardGalleryItemUniDriver>;
  export const carouselTestkitFactory: any;
  export const circularProgressBarTestkitFactory: any;
  export const colorInputTestkitFactory: any;
  export const colorPickerTestkitFactory: any;
  export const contactItemBuilderTestkitFactory: any;
  export const dateInputTestkitFactory: any;
  export const datePickerTestkitFactory: any;
  export const editableSelectorTestkitFactory: any;
  export const editableTitleTestkitFactory: any;
  export const floatingHelperTestkitFactory: any;
  export const googleAddressInputWithLabelTestkitFactory: any;
  export const googlePreviewTestkitFactory: any;
  export const inputAreaTestkitFactory: any;
  export const listItemActionTestkitFactory: any;
  export const multiSelectTestkitFactory: any;
  export const multiSelectCheckboxTestkitFactory: any;
  export const multiSelectCompositeTestkitFactory: any;
  export const nestableListTestkitFactory: any;
  export const noBorderInputTestkitFactory: any;
  export const notificationTestkitFactory: any;
  export const numberInputTestkitFactory: any;
  export const popoverTestkitFactory: any;
  export const popoverMenuTestkitFactory: any;
  export const proportionTestkitFactory: any;
  export const rangeTestkitFactory: any;
  export const richTextInputAreaTestkitFactory: any;
  export const sidebarTestkitFactory: any;
  export const sidebarSectionTitleTestkitFactory: any;
  export const sliderTestkitFactory: any;
  export const sortableListTestkitFactory: any;
  export const statsWidgetTestkitFactory: any;
  export const swatchesTestkitFactory: any;
  export const tableTestkitFactory: any;
  export const tableActionCellTestkitFactory: any;
  export const tabsTestkitFactory: any;
  export const timeInputTestkitFactory: any;
  export const toggleSwitchTestkitFactory: any;
  export const sidebarSectionItemTestkitFactory: any;
  export const sidebarDividerTestkitFactory: any;
  export const sidebarBackButtonTestkitFactory: any;
  export const sidebarHeaderTestkitFactory: any;
  export const composerHeaderTestkitFactory: any;
  export const barChartTestkitFactory: any;
  export const inputWithLabelTestkitFactory: any;
  export const autoCompleteWithLabelTestkitFactory: any;
  export const dividerTestkitFactory: any;
  export const labelledElementTestkitFactory: any;
  export const mediaOverlayTestkitFactory: any;
  export const infoIconTestkitFactory: any;
  export const socialButtonTestkitFactory: any;
  export const verticalTabsTestkitFactory: any;
  export const verticalTabsItemTestkitFactory: any;
  export const sideMenuDrillTestkitFactory: any;
  export const headerTestkitFactory: any;
  export const sideMenuTestkitFactory: any;
  export const draggableTestkitFactory: any;
  export const editableRowTestkitFactory: any;
  export const fieldLabelAttributesTestkitFactory: any;
  export const fieldWithSelectionCompositeTestkitFactory: any;
  export const cardSubheaderTestkitFactory: any;
  export const tooltipTestkitFactory: any;
  export const TooltipTestkit: any;
  export const previewWidgetTestkitFactory: any;
  export const mobilePreviewWidgetTestkitFactory: any;
  export const browserPreviewWidgetTestkitFactory: any;
  export const timeTableTestkitFactory: any;
  export const marketingLayoutTestkitFactory: any;
}
