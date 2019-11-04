import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class Builder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Controllers</div>
            </Aux>
        );
    }
};

export default Builder;