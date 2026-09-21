# Component Coverage

Phase 7 completes systematic Figma/code comparison for all 36 implemented component groups, plus targeted desktop, narrow, RTL, and interactive browser checks. Open design-policy and inherited contrast items remain explicit; Safari, Firefox, Edge, and manual screen-reader validation were not available in this environment.

`⚠` means the semantic implementation and automated checks exist, but an inherited Figma contrast issue still requires a design decision.

| Figma component             | Proposed code                 | Code | Storybook | Tests | A11y | RTL | Status                   |
| --------------------------- | ----------------------------- | ---: | --------: | ----: | ---: | --: | ------------------------ |
| .Page Header                | Documentation helper          |    — |         — |     — |    — |   — | Needs Engineering Review |
| .Color Swatch               | Token story renderer          |    — |         ✓ |     — |    — |   — | Needs Engineering Review |
| 🔘 Buttons                  | Button                        |    ✓ |         ✓ |     ✓ |    ⚠ |   ✓ | Needs Design Decision    |
| Icon Buttons                | IconButton                    |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Ready                    |
| Close Buttons               | CloseButton                   |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Needs Design Decision    |
| Button Group                | ButtonGroup                   |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Implemented              |
| Dropdown / Select           | SelectItem or Select          |    — |         — |     — |    — |   — | Needs Design Decision    |
| Input                       | Input                         |    ✓ |         ✓ |     ✓ |    ⚠ |   ✓ | Needs Design Decision    |
| .Input Base Cursor          | Native caret                  |    — |         — |     — |    — |   — | Needs Engineering Review |
| Checkbox Base               | Checkbox                      |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Ready                    |
| .Number Input               | NumberInput                   |    — |         — |     — |    — |   — | Needs Design Decision    |
| Command Base / Search       | SearchField                   |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Ready                    |
| Radio button                | Radio                         |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Ready                    |
| Switch                      | Switch                        |    ✓ |         ✓ |     ✓ |    ⚠ |   ✓ | Needs Design Decision    |
| .Resize Thumb               | Native/internal resize handle |    — |         — |     — |    — |   — | Needs Engineering Review |
| Textarea                    | Textarea                      |    ✓ |         ✓ |     ✓ |    ⚠ |   ✓ | Needs Design Decision    |
| Combobox Auto-complete      | Select (native pilot)         |    ✓ |         ✓ |     ✓ |    ⚠ |   ✓ | Needs Design Decision    |
| Calendar                    | Calendar                      |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Needs Design Decision    |
| .Calenday Base              | CalendarDay                   |    — |         — |     — |    — |   — | Needs Engineering Review |
| Date Picker                 | DatePicker                    |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Needs Design Decision    |
| Time Picker                 | TimePicker                    |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Needs Design Decision    |
| _base-Time Picker           | TimePickerOption              |    — |         — |     — |    — |   — | Needs Engineering Review |
| File Uploader : drag upload | FileUploader                  |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Needs Design Decision    |
| Accordion                   | Accordion                     |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Implemented              |
| Top Navigation Bar          | TopNavigation                 |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Needs Design Decision    |
| . logo Buttons              | BrandButton                   |    — |         — |     — |    — |   — | Needs Engineering Review |
| .menu sidebar               | SidebarItem                   |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Implemented              |
| Sidebar                     | Sidebar                       |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Needs Design Decision    |
| .Breadcrumb Base            | BreadcrumbItem                |    — |         — |     — |    — |   — | Needs Engineering Review |
| Breadcrumb                  | Breadcrumb                    |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Implemented              |
| Tabs / Horizontal           | Tabs                          |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Implemented              |
| Tabs / Vertical             | Tabs                          |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Implemented              |
| .Tabs Base / Tab Item       | Tab                           |    — |         — |     — |    — |   — | Needs Engineering Review |
| Pagination                  | Pagination                    |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Implemented              |
| .Pagination Base / Item     | PaginationItem                |    — |         — |     — |    — |   — | Needs Engineering Review |
| .Icon sidebar right         | Sidebar control               |    — |         — |     — |    — |   — | Needs Engineering Review |
| .Icon sidebar left          | Sidebar control               |    — |         — |     — |    — |   — | Needs Engineering Review |
| Dashboard Toggle            | DashboardToggle               |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Needs Design Decision    |
| Tooltip                     | Tooltip                       |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Needs Design Decision    |
| Toast Base / Button         | ToastAction                   |    — |         — |     — |    — |   — | Needs Engineering Review |
| Toast                       | Toast                         |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Needs Design Decision    |
| Snackbar                    | Snackbar                      |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Needs Design Decision    |
| Badge                       | Badge                         |    ✓ |         ✓ |     ✓ |    ⚠ |   ✓ | Needs Design Decision    |
| status                      | StatusBadge                   |    ✓ |         ✓ |     ✓ |    ⚠ |   ✓ | Needs Design Decision    |
| Toast -Sooner               | ToastViewport                 |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Needs Design Decision    |
| Progress                    | Progress                      |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Ready                    |
| Divider Horisontal          | Divider                       |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Needs Design Decision    |
| Divider Vertical            | Divider                       |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Ready                    |
| Dialog Card Base / Header   | DialogHeader                  |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Implemented              |
| Dialog Card Base / Footer   | DialogFooter                  |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Implemented              |
| Dialog / Main               | Dialog                        |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Needs Design Decision    |
| Avatar                      | Avatar                        |    ✓ |         ✓ |     ✓ |    ⚠ |   ✓ | Needs Design Decision    |
| .Role Badge                 | RoleBadge                     |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Implemented              |
| .Role Badge cell            | RoleBadgeCell                 |    ✓ |         ✓ |     ✓ |    ✓ |   ✓ | Implemented              |
| .Cursor / Hand              | CSS cursor docs               |    — |         — |     — |    — |   — | Blocked                  |
| .Cursor / Move to           | CSS cursor docs               |    — |         — |     — |    — |   — | Blocked                  |
| .Cursor / Resize            | CSS cursor docs               |    — |         — |     — |    — |   — | Blocked                  |
| .Cursor                     | CSS cursor docs               |    — |         — |     — |    — |   — | Blocked                  |
| indicator                   | Status dot                    |    — |         — |     — |    — |   — | Needs Design Decision    |
