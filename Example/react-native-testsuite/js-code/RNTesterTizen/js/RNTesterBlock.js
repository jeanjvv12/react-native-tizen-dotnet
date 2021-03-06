/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RNTesterBlock
 * @flow
 */
'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = ReactNative;

class RNTesterBlock extends React.Component {
  props: {
    title?: string,
    titleNotHightlightable?: boolean,
    description?: string,
  };

  static propTypes = {
    title: PropTypes.string,
    titleNotHightlightable: PropTypes.bool,
    description: PropTypes.string,
  };

  state = {description: (null: ?string)};

  render() {
    var description;
    if (this.props.description) {
      description =
        <Text style={styles.descriptionText}>
          {this.props.description}
        </Text>;
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          {this.props.titleNotHightlightable ?
            <Text style={styles.titleText}>
              {this.props.title}
            </Text> : 
              <Text style={styles.titleText}>
                {this.props.title}
              </Text>
            }
          {description}
        </View>
        <View style={styles.children}>
          {
            // $FlowFixMe found when converting React.createClass to ES6
            this.props.children}
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#ffffff',
    margin: 10,
    marginVertical: 5,
    overflow: 'hidden',
  },
  titleContainer: {
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 2.5,
    borderBottomColor: '#6495ED',
    backgroundColor: '#f6f7f8',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  descriptionText: {
    fontSize: 14,
    color: 'black',
  },
  disclosure: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
  disclosureIcon: {
    width: 12,
    height: 8,
  },
  children: {
    margin: 10,
  }
});

module.exports = RNTesterBlock;
