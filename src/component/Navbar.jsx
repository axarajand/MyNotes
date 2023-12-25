import React from 'react';

class Navbar extends React.Component {
    handleSearchChange = (e) => {
        this.props.onSearch(e.target.value);
    };

    render() {
        return (
            <nav className="navbar">
                <h1>MyNotes</h1>
                <input
                    type="text"
                    placeholder="Cari Judul ..."
                    onChange={this.handleSearchChange}
                />
            </nav>
        );
    }
}

export default Navbar;