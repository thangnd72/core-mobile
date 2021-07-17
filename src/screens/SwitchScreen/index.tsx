import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {ApplicationState} from 'store/configureAction';
import {HomeStackContainer} from 'navigation/stackHomeNavigation';
import {SettingStackContainer} from 'navigation/stackSettingNavigation';
import {TabContainer} from 'navigation/bottomTabsNavigation';

interface State {}
type UIProps = State;
const SwitchScreen = (props: UIProps) => {
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />
      <View style={{flex: 1}}>
        <TabContainer />
      </View>
    </>
  );
};
const mapStateToProps = (state: ApplicationState) => ({});
const mapDispatchToProps = {};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(SwitchScreen as any);
