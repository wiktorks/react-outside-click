import React, { Component } from 'react';
import style from './style.module.css';

const outsideClickHOC = (Dropdown) => class extends Component {
    constructor(props) {
        super(props);
        this.dropdownRef = React.createRef(null)
        this.state = {
            waitingOnClickOutside: false,
            wrapperClass: null,
            coverClass: style.hidden
        }
        this.preventClick = false;
    }

    onStartListeningClickOutside = () => {
        if (!this.preventClick) {
            if (!this.state.waitingOnClickOutside) {
                this.setState({
                    waitingOnClickOutside: true,
                    wrapperClass: style.wrapper,
                    coverClass: style.cover
                });
            }
        } else {
            this.preventClick = false;
        }
    }

    onClickOutside = () => {
        this.preventClick = true;
        this.setState({
            waitingOnClickOutside: false,
            wrapperClass: null,
            coverClass: style.hidden
        }, () => this.dropdownRef.current.click());
    }

    render() {
        return (
            <>
                <div
                    className={`${this.state.coverClass} cover-div`}
                    onClick={this.onClickOutside}
                ></div>
                <div
                    className={`${this.state.wrapperClass} container`}
                    style={{ display: "inline-block", width: '30%' }}
                    onClick={this.onStartListeningClickOutside}
                >
                    <Dropdown
                        ref={this.dropdownRef}
                        waitingOnClick={this.state.waitingOnClickOutside}
                        {...this.props}
                    >{this.props.children}</Dropdown>
                </div>
            </>
        );
    }
}

export default outsideClickHOC;


// Stwórz HOCa outsideClickHOC, który bedzie działać np z customowymi
// componentami typu dropdown lub select: 

// który będzie działać wg poniższych wytycznych:
// - będzie do owrapowanego komponentu dodawać propsy oraz działanie:

// działanie 1:
// -- prop - onStartListeningClickOutside 
// --- jeśli ta funkcja zostanie wywołana dany komponent zyskuje z-index najwyższy na stronie
// --- pod komponentem pojawia się półprzeźroczyste ciemne tło, w które można kliknąć zamykając komponent

// działanie 2:
// -- prop - waitingOnClickOutside
// --- zwraca true/false jeśli została wywołana metoda onStartListeningClickOutside

// działanie 3:
// -- prop onClickOutside
// --- jesli ta funkcja zostanie wywołana komponent wraca na swoje miejsce z odpowiednim z-index
// --- znika półprzeźroczyste szare tło spod komponentu

// - mentor 
// - czs na refactor
// - czas na pisanie testów
