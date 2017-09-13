/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {changeUsername, selectUserName} from './actions';
import { bindActionCreators } from 'redux';

import UL from '../../components/UL'
import Input from './Input';
import ListItem from './ListItem';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import PanelWrapper from './PanelWrapper';

export class HomePage extends React.PureComponent { 

  handleSelect(id, text) {
    this.props.onSelectName(id)
  }
  
  getInputValue() {
    let val = ""
    this.props.items.map((item) =>
      item.selected ? val = item.text : ""
    )
    return val
  }

  render() {
    // console.log(this.props.items)
    return (
      <PanelWrapper>
        <LeftPanel>
          <UL>
            { this.props.items.map((item) =>
              <ListItem items={item} key={item.id} onSelect={this.handleSelect.bind(this)} />
            )}
          </UL>
        </LeftPanel>
        <RightPanel>
          <Input
            id="username"
            type="text"
            value={this.getInputValue()}
            placeholder="Please select an item from the list on the left"
            onChange={this.props.onChangeUsername} />
        </RightPanel>
      </PanelWrapper>
    );
  }
}

HomePage.propTypes = {
  onChangeUsername: React.PropTypes.func,
  onSelectName: React.PropTypes.func,
};

const mapStateToProps = state => ({
  items: state.getIn(['home']),
})

const mapDispatchToProps = dispatch => ({
  onSelectName: bindActionCreators(selectUserName, dispatch),
  onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
