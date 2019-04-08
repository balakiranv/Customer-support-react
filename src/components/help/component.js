import React, { Component } from 'react';
import { TabPanel, TabList, Tabs, Tab } from 'react-tabs';

import Livechat from '../../library/live-chat/component';
import Faq from '../../library/faq/component';
import Mailus from '../../library/mail-us/component';

import 'react-tabs/style/react-tabs.css';
import './styles.css';


class Help extends Component {
    render() {
        return (
            (
                <Tabs>
                    <TabList>
                        <Tab><i className="fa fa-comment mr-1"></i>Live Chat</Tab>
                        <Tab> <i className="fa fa-search mr-1"></i>FAQ</Tab>
                        <Tab> <i className="fa fa-envelope mr-1"></i>Mail Us</Tab>
                    </TabList>
                    <TabPanel>
                        <Livechat></Livechat>
                    </TabPanel>
                    <TabPanel>
                        <Faq></Faq>
                    </TabPanel>
                    <TabPanel>
                        <Mailus></Mailus>
                    </TabPanel>
                </Tabs>
            )
        );
    }
}

export default Help;
