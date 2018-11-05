/*********************************************************************
 * element-ui import function file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

/* 16进制颜色转rgba */
import {
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Slider,
    Icon,
    Row,
    Col,
    Upload,
    Progress,
    Badge,
    Card,
    Rate,
    Steps,
    Step,
    Carousel,
    CarouselItem,
    Collapse,
    CollapseItem,
    Cascader,
    ColorPicker,
    Transfer,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Loading,
    MessageBox,
    Message,
    Notification
} from 'element-ui';


class ElementUI {
    constructor(Vue) {
        this.Vue = Vue;
    }

    install() {
        this.Vue.use(Pagination);
        this.Vue.use(Dialog);
        this.Vue.use(Autocomplete);
        this.Vue.use(Dropdown);
        this.Vue.use(DropdownMenu);
        this.Vue.use(DropdownItem);
        this.Vue.use(Menu);
        this.Vue.use(Submenu);
        this.Vue.use(MenuItem);
        this.Vue.use(MenuItemGroup);
        this.Vue.use(Input);
        this.Vue.use(InputNumber);
        this.Vue.use(Radio);
        this.Vue.use(RadioGroup);
        this.Vue.use(RadioButton);
        this.Vue.use(Checkbox);
        this.Vue.use(CheckboxButton);
        this.Vue.use(CheckboxGroup);
        this.Vue.use(Switch);
        this.Vue.use(Select);
        this.Vue.use(Option);
        this.Vue.use(OptionGroup);
        this.Vue.use(Button);
        this.Vue.use(ButtonGroup);
        this.Vue.use(Table);
        this.Vue.use(TableColumn);
        this.Vue.use(DatePicker);
        this.Vue.use(TimeSelect);
        this.Vue.use(TimePicker);
        this.Vue.use(Popover);
        this.Vue.use(Tooltip);
        this.Vue.use(Breadcrumb);
        this.Vue.use(BreadcrumbItem);
        this.Vue.use(Form);
        this.Vue.use(FormItem);
        this.Vue.use(Tabs);
        this.Vue.use(TabPane);
        this.Vue.use(Tag);
        this.Vue.use(Tree);
        this.Vue.use(Alert);
        this.Vue.use(Slider);
        this.Vue.use(Icon);
        this.Vue.use(Row);
        this.Vue.use(Col);
        this.Vue.use(Upload);
        this.Vue.use(Progress);
        this.Vue.use(Badge);
        this.Vue.use(Card);
        this.Vue.use(Rate);
        this.Vue.use(Steps);
        this.Vue.use(Step);
        this.Vue.use(Carousel);
        this.Vue.use(CarouselItem);
        this.Vue.use(Collapse);
        this.Vue.use(CollapseItem);
        this.Vue.use(Cascader);
        this.Vue.use(ColorPicker);
        this.Vue.use(Transfer);
        this.Vue.use(Container);
        this.Vue.use(Header);
        this.Vue.use(Aside);
        this.Vue.use(Main);
        this.Vue.use(Footer);

        this.Vue.use(Loading.directive);

        this.Vue.prototype.$loading = Loading.service;
        this.Vue.prototype.$msgbox = MessageBox;
        this.Vue.prototype.$alert = MessageBox.alert;
        this.Vue.prototype.$confirm = MessageBox.confirm;
        this.Vue.prototype.$prompt = MessageBox.prompt;
        this.Vue.prototype.$notify = Notification;
        this.Vue.prototype.$message = Message;
    }
}

export default ElementUI;