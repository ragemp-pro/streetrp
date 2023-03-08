import Framework7 from 'framework7/lite';
import Framework7React from 'framework7-react';
import Page from 'framework7/components/page';
import Navbar from 'framework7/components/navbar';
import List from 'framework7/components/list';
import Input from 'framework7/components/input';
import Toggle from 'framework7/components/toggle';
import View from 'framework7/components/view';
import Icon from 'framework7/components/icon';
import Scroll from 'framework7/components/infinite-scroll';
import Preloader from 'framework7/components/preloader';
import Accordion from 'framework7/components/accordion';
import SmartSelect from 'framework7/components/smart-select';

const plugins = [
	View,
	Page,
	Navbar,
	List,
	Input,
	Toggle,
	Icon,
	Scroll,
	Preloader,
	Accordion,
	SmartSelect
];

Framework7.use(plugins);
Framework7.use(Framework7React);

export default Framework7;
