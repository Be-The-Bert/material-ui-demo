import React, { Component } from 'react';
import logo from './materialui.svg';
import './App.css';



import IconMenu from 'material-ui/IconMenu';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';



import FlatButton from 'material-ui/FlatButton';

import RaisedButton from 'material-ui/RaisedButton';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentMail from 'material-ui/svg-icons/content/mail';
import ContentUndo from 'material-ui/svg-icons/content/undo';
import ContentRedo from 'material-ui/svg-icons/content/redo';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentSave from 'material-ui/svg-icons/content/save';

import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import DatePicker from 'material-ui/DatePicker';


import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: 3,
      selectedIndex: 0
    };
  }
  select = (index) => this.setState({ selectedIndex: index });
  render() {
    const style = {
      margin: 12,
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to material-ui</h1>
        </header>
        <RaisedButton label={this.state.show ? 'Take It Away' : 'Show Me The Money'} primary={true} style={style} onClick={() => this.setState({show: !this.state.show})}/>
        {this.state.show
        ?
          <div>
            {/* TOOLBAR */}
            <Toolbar>
              <ToolbarGroup firstChild={true}>
                <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                  <MenuItem value={1} primaryText="All Broadcasts" />
                  <MenuItem value={2} primaryText="All Voice" />
                  <MenuItem value={3} primaryText="All Text" />
                  <MenuItem value={4} primaryText="Complete Voice" />
                  <MenuItem value={5} primaryText="Complete Text" />
                  <MenuItem value={6} primaryText="Active Voice" />
                  <MenuItem value={7} primaryText="Active Text" />
                </DropDownMenu>
              </ToolbarGroup>
              <ToolbarGroup>
                <ToolbarTitle text="Options" />
                <FontIcon className="muidocs-icon-custom-sort" />
                <ToolbarSeparator />
                <RaisedButton label="Create Broadcast" primary={true} />
                <IconMenu
                  iconButtonElement={
                    <IconButton touch={true}>
                      <NavigationExpandMoreIcon />
                    </IconButton>
                  }
                >
                  <MenuItem primaryText="Download" />
                  <MenuItem primaryText="More Info" />
                </IconMenu>
              </ToolbarGroup>
            </Toolbar>

            {/* BUTTONS */}
            <h2>Flat Buttons</h2>
            <FlatButton label="Default" />
            <FlatButton label="Primary" primary={true} />
            <FlatButton label="Secondary" secondary={true} />
            <FlatButton label="Disabled" disabled={true} />
            <FlatButton label="Full width" fullWidth={true} />

            <h2>Raised Buttons</h2>
            <RaisedButton label="Default" style={style} />
            <RaisedButton label="Primary" primary={true} style={style} />
            <RaisedButton label="Secondary" secondary={true} style={style} />
            <RaisedButton label="Disabled" disabled={true} style={style} />
            <RaisedButton label="Full width" fullWidth={true} />

            <h2>Action Buttons</h2>
            <FloatingActionButton style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton secondary={true} style={style}>
              <ContentMail />
            </FloatingActionButton>
            <FloatingActionButton disabled={true} style={style}>
              <ContentUndo />
            </FloatingActionButton>
            <FloatingActionButton style={style}>
              <ContentRedo />
            </FloatingActionButton>
            <FloatingActionButton secondary={true} style={style}>
              <ContentSend />
            </FloatingActionButton>
            <FloatingActionButton disabled={true} style={style}>
              <ContentSave />
            </FloatingActionButton>

            <h2>Icon Buttons</h2>
            <IconButton tooltip="Svg Icon">
              <ActionHome />
            </IconButton>

            {/* DATE PICKER */}
            <DatePicker hintText="Choose a Date" mode="landscape" />

            {/* BOTTOM NAV */}
            <Paper zDepth={1}>
              <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                  label="Recents"
                  icon={recentsIcon}
                  onClick={() => this.select(0)}
                />
                <BottomNavigationItem
                  label="Favorites"
                  icon={favoritesIcon}
                  onClick={() => this.select(1)}
                />
                <BottomNavigationItem
                  label="Nearby"
                  icon={nearbyIcon}
                  onClick={() => this.select(2)}
                />
              </BottomNavigation>
            </Paper>
          </div>
        :
          null
        }
      </div>
    );
  }
}

export default App;
