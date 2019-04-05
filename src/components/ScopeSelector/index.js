import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import './scopeSelector.css'

class ScopeSelector extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            scopes: props.initialScopes,
        };
    }

    handleInput = (e, scopeName) => {
        this.setState({
            scopes: this.props.multiple
                ? {
                    // set target = e.target.checked and ...prevProps.scopes;
                }
                : {
                    // set target = e.target.checked and others to false;
                }
        })
    }


    renderControls = () => {
        const { scopes } = this.state;

        return (
            <Fragment>
                {Object.keys(scopes).map(scope => (
                     <label>
                     {scope}:
                     <input
                         type={this.props.multiple ? 'checkbox' : 'radio'}
                         name={scope}
                         value={scope}
                         checked={scopes[scope]}
                         onChange={(e) => this.handleInput(e, scope)}
                    />
                 </label>
                ))}

                {
                    // render child using renderProps patters that will filter data render;
                }
            </Fragment>
        )
    }

    render() {
        return (
            <Fragment>
                {this.renderControls()}
            </Fragment>
        )
    }
}

ScopeSelector.propTypes = {
    multiple: PropTypes.bool,
    initialScopes: PropTypes.shape({
        Training: PropTypes.bool,
        Validation: PropTypes.bool,
        Test: PropTypes.bool,
    }),
    data: PropTypes.shape({
        Training: PropTypes.arrayOf(PropTypes.array),
        Validation: PropTypes.arrayOf(PropTypes.array),
        Test: PropTypes.arrayOf(PropTypes.array),
    })
};

ScopeSelector.defaultProps = {
    multiple: true,
};

export default ScopeSelector;