import Square from './Square'
import React from "react"
import Swal from 'sweetalert2'



export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(400).fill(null),
            xIsNext: true,
            check: false,
            sum: 0

        };
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }
    handleClick(i) {
        const newSquaresArr = this.state.squares.slice();

        if (this.state.check) {
            Swal.fire({
                imageUrl: 'https://www.cointelligence.com/content/wp-content/uploads/2019/02/Game-Over-Hodler.jpg',

                title: 'Game over',
                text: 'Please restart game!!!'
            })
            return;
        }

        else if (newSquaresArr[i] === null) {
            newSquaresArr[i] = this.state.xIsNext ? 'X' : 'O';
            var total = this.state.sum + 1;
            this.setState({
                squares: newSquaresArr,
                xIsNext: !this.state.xIsNext,
                sum: total
            });
            switch (newSquaresArr[i]) {
                case 'O': {
                    //hàng
                    if (((newSquaresArr[i - 1] === 'X' && newSquaresArr[i + 5] !== 'X') ||
                        (newSquaresArr[i - 1] !== 'X' && newSquaresArr[i + 5] === 'X') ||
                        (newSquaresArr[i - 1] !== 'X' && newSquaresArr[i + 5] !== 'X')
                    )
                        && newSquaresArr[i + 1] === 'O'
                        && newSquaresArr[i + 2] === 'O'
                        && newSquaresArr[i + 3] === 'O'
                        && newSquaresArr[i + 4] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }


                    if (((newSquaresArr[i - 2] === 'X' && newSquaresArr[i + 4] !== 'X') ||
                        (newSquaresArr[i - 2] !== 'X' && newSquaresArr[i + 4] === 'X') ||
                        (newSquaresArr[i - 2] !== 'X' && newSquaresArr[i + 4] !== 'X'))
                        && newSquaresArr[i - 1] === 'O'
                        && newSquaresArr[i + 1] === 'O'
                        && newSquaresArr[i + 2] === 'O'
                        && newSquaresArr[i + 3] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }
                    if (((newSquaresArr[i - 3] === 'X' && newSquaresArr[i + 3] !== 'X') ||
                        (newSquaresArr[i - 3] !== 'X' && newSquaresArr[i + 3] === 'X') ||
                        (newSquaresArr[i - 3] !== 'X' && newSquaresArr[i + 3] !== 'X'))
                        && newSquaresArr[i - 2] === 'O'
                        && newSquaresArr[i - 1] === 'O'
                        && newSquaresArr[i + 1] === 'O'
                        && newSquaresArr[i + 2] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }
                    if (((newSquaresArr[i - 4] === 'X' && newSquaresArr[i + 2] !== 'X') ||
                        (newSquaresArr[i - 4] !== 'X' && newSquaresArr[i + 2] === 'X') ||
                        (newSquaresArr[i - 4] !== 'X' && newSquaresArr[i + 2] !== 'X'))
                        && newSquaresArr[i - 3] === 'O'
                        && newSquaresArr[i - 2] === 'O'
                        && newSquaresArr[i - 1] === 'O'
                        && newSquaresArr[i + 1] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }
                    if (((newSquaresArr[i - 5] === 'X' && newSquaresArr[i + 1] !== 'X') ||
                        (newSquaresArr[i - 5] !== 'X' && newSquaresArr[i + 1] === 'X') ||
                        (newSquaresArr[i - 5] !== 'X' && newSquaresArr[i + 1] !== 'X'))
                        && newSquaresArr[i - 4] === 'O'
                        && newSquaresArr[i - 3] === 'O'
                        && newSquaresArr[i - 2] === 'O'
                        && newSquaresArr[i - 1] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }


                    //dọc
                    if (((newSquaresArr[i - 20] === 'X' && newSquaresArr[i + 100] !== 'X') ||
                        (newSquaresArr[i - 20] !== 'X' && newSquaresArr[i + 100] === 'X') ||
                        (newSquaresArr[i - 20] !== 'X' && newSquaresArr[i + 100] !== 'X'))
                        && newSquaresArr[i + 20] === 'O'
                        && newSquaresArr[i + 40] === 'O'
                        && newSquaresArr[i + 60] === 'O'
                        && newSquaresArr[i + 80] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 40] === 'X' && newSquaresArr[i + 80] !== 'X') ||
                        (newSquaresArr[i - 40] !== 'X' && newSquaresArr[i + 80] === 'X') ||
                        (newSquaresArr[i - 40] !== 'X' && newSquaresArr[i + 80] !== 'X'))
                        && newSquaresArr[i - 20] === 'O'
                        && newSquaresArr[i + 20] === 'O'
                        && newSquaresArr[i + 40] === 'O'
                        && newSquaresArr[i + 60] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 60] === 'X' && newSquaresArr[i + 60] !== 'X') ||
                        (newSquaresArr[i - 60] !== 'X' && newSquaresArr[i + 60] === 'X') ||
                        (newSquaresArr[i - 60] !== 'X' && newSquaresArr[i + 60] !== 'X'))
                        && newSquaresArr[i - 40] === 'O'
                        && newSquaresArr[i - 20] === 'O'
                        && newSquaresArr[i + 20] === 'O'
                        && newSquaresArr[i + 40] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 80] === 'X' && newSquaresArr[i + 40] !== 'X') ||
                        (newSquaresArr[i - 80] !== 'X' && newSquaresArr[i + 40] === 'X') ||
                        (newSquaresArr[i - 80] !== 'X' && newSquaresArr[i + 40] !== 'X'))
                        && newSquaresArr[i - 60] === 'O'
                        && newSquaresArr[i - 40] === 'O'
                        && newSquaresArr[i - 20] === 'O'
                        && newSquaresArr[i + 20] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 100] === 'X' && newSquaresArr[i + 20] !== 'X') ||
                        (newSquaresArr[i - 100] !== 'X' && newSquaresArr[i + 20] === 'X') ||
                        (newSquaresArr[i - 100] !== 'X' && newSquaresArr[i + 20] !== 'X'))
                        && newSquaresArr[i - 80] === 'O'
                        && newSquaresArr[i - 60] === 'O'
                        && newSquaresArr[i - 40] === 'O'
                        && newSquaresArr[i - 20] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }

                    //chéo phải
                    if (((newSquaresArr[i - 21] === 'X' && newSquaresArr[i + 105] !== 'X') ||
                        (newSquaresArr[i - 21] !== 'X' && newSquaresArr[i + 105] === 'X') ||
                        (newSquaresArr[i - 21] !== 'X' && newSquaresArr[i + 105] !== 'X'))
                        && newSquaresArr[i + 21] === 'O'
                        && newSquaresArr[i + 42] === 'O'
                        && newSquaresArr[i + 63] === 'O'
                        && newSquaresArr[i + 84] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }
                    if (((newSquaresArr[i - 42] === 'X' && newSquaresArr[i + 84] !== 'X') ||
                        (newSquaresArr[i - 42] !== 'X' && newSquaresArr[i + 84] === 'X') ||
                        (newSquaresArr[i - 42] !== 'X' && newSquaresArr[i + 84] !== 'X'))
                        && newSquaresArr[i - 21] === 'O'
                        && newSquaresArr[i + 21] === 'O'
                        && newSquaresArr[i + 42] === 'O'
                        && newSquaresArr[i + 63] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 63] === 'X' && newSquaresArr[i + 63] !== 'X') ||
                        (newSquaresArr[i - 63] !== 'X' && newSquaresArr[i + 63] === 'X') ||
                        (newSquaresArr[i - 63] !== 'X' && newSquaresArr[i + 63] !== 'X'))
                        && newSquaresArr[i - 42] === 'O'
                        && newSquaresArr[i - 21] === 'O'
                        && newSquaresArr[i + 21] === 'O'
                        && newSquaresArr[i + 42] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }


                    if (((newSquaresArr[i - 84] === 'X' && newSquaresArr[i + 42] !== 'X') ||
                        (newSquaresArr[i - 84] !== 'X' && newSquaresArr[i + 42] === 'X') ||
                        (newSquaresArr[i - 84] !== 'X' && newSquaresArr[i + 42] !== 'X'))
                        && newSquaresArr[i - 63] === 'O'
                        && newSquaresArr[i - 42] === 'O'
                        && newSquaresArr[i - 21] === 'O'
                        && newSquaresArr[i + 21] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 105] === 'X' && newSquaresArr[i + 21] !== 'X') ||
                        (newSquaresArr[i - 105] !== 'X' && newSquaresArr[i + 21] === 'X') ||
                        (newSquaresArr[i - 105] !== 'X' && newSquaresArr[i + 21] !== 'X'))
                        && newSquaresArr[i - 84] === 'O'
                        && newSquaresArr[i - 63] === 'O'
                        && newSquaresArr[i - 42] === 'O'
                        && newSquaresArr[i - 21] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }

                    //chéo trái
                    if (((newSquaresArr[i - 19] === 'X' && newSquaresArr[i + 95] !== 'X') ||
                        (newSquaresArr[i - 19] !== 'X' && newSquaresArr[i + 95] === 'X') ||
                        (newSquaresArr[i - 19] !== 'X' && newSquaresArr[i + 95] !== 'X'))
                        && newSquaresArr[i + 19] === 'O'
                        && newSquaresArr[i + 38] === 'O'
                        && newSquaresArr[i + 57] === 'O'
                        && newSquaresArr[i + 76] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }
                    if (((newSquaresArr[i - 38] === 'X' && newSquaresArr[i + 76] !== 'X') ||
                        (newSquaresArr[i - 38] !== 'X' && newSquaresArr[i + 76] === 'X') ||
                        (newSquaresArr[i - 38] !== 'X' && newSquaresArr[i + 76] !== 'X'))
                        && newSquaresArr[i - 19] === 'O'
                        && newSquaresArr[i + 19] === 'O'
                        && newSquaresArr[i + 38] === 'O'
                        && newSquaresArr[i + 57] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 57] === 'X' && newSquaresArr[i + 57] !== 'X') ||
                        (newSquaresArr[i - 57] !== 'X' && newSquaresArr[i + 57] === 'X') ||
                        (newSquaresArr[i - 57] !== 'X' && newSquaresArr[i + 57] !== 'X'))
                        && newSquaresArr[i - 38] === 'O'
                        && newSquaresArr[i - 19] === 'O'
                        && newSquaresArr[i + 19] === 'O'
                        && newSquaresArr[i + 38] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }


                    if (((newSquaresArr[i - 76] === 'X' && newSquaresArr[i + 38] !== 'X') ||
                        (newSquaresArr[i - 76] !== 'X' && newSquaresArr[i + 38] === 'X') ||
                        (newSquaresArr[i - 76] !== 'X' && newSquaresArr[i + 38] !== 'X'))
                        && newSquaresArr[i - 57] === 'O'
                        && newSquaresArr[i - 38] === 'O'
                        && newSquaresArr[i - 19] === 'O'
                        && newSquaresArr[i + 19] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 95] === 'X' && newSquaresArr[i + 19] !== 'X') ||
                        (newSquaresArr[i - 95] !== 'X' && newSquaresArr[i + 19] === 'X') ||
                        (newSquaresArr[i - 95] !== 'X' && newSquaresArr[i + 19] !== 'X'))
                        && newSquaresArr[i - 76] === 'O'
                        && newSquaresArr[i - 57] === 'O'
                        && newSquaresArr[i - 38] === 'O'
                        && newSquaresArr[i - 19] === 'O'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: '0 is winner :)',
                        })
                    }


                }
                case 'X': {
                    //hàng
                    if (((newSquaresArr[i - 1] === 'O' && newSquaresArr[i + 5] !== 'O') ||
                        (newSquaresArr[i - 1] !== 'O' && newSquaresArr[i + 5] === 'O') ||
                        (newSquaresArr[i - 1] !== 'O' && newSquaresArr[i + 5] !== 'O')
                    )
                        && newSquaresArr[i + 1] === 'X'
                        && newSquaresArr[i + 2] === 'X'
                        && newSquaresArr[i + 3] === 'X'
                        && newSquaresArr[i + 4] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }
                    if (((newSquaresArr[i - 2] === 'O' && newSquaresArr[i + 4] !== 'O') ||
                        (newSquaresArr[i - 2] !== 'O' && newSquaresArr[i + 4] === 'O') ||
                        (newSquaresArr[i - 2] !== 'O' && newSquaresArr[i + 4] !== 'O'))
                        && newSquaresArr[i - 1] === 'X'
                        && newSquaresArr[i + 1] === 'X'
                        && newSquaresArr[i + 2] === 'X'
                        && newSquaresArr[i + 3] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }
                    if (((newSquaresArr[i - 3] === 'O' && newSquaresArr[i + 3] !== 'O') ||
                        (newSquaresArr[i - 3] !== 'O' && newSquaresArr[i + 3] === 'O') ||
                        (newSquaresArr[i - 3] !== 'O' && newSquaresArr[i + 3] !== 'O'))
                        && newSquaresArr[i - 2] === 'X'
                        && newSquaresArr[i - 1] === 'X'
                        && newSquaresArr[i + 1] === 'X'
                        && newSquaresArr[i + 2] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }
                    if (((newSquaresArr[i - 4] === 'O' && newSquaresArr[i + 2] !== 'O') ||
                        (newSquaresArr[i - 4] !== 'O' && newSquaresArr[i + 2] === 'O') ||
                        (newSquaresArr[i - 4] !== 'O' && newSquaresArr[i + 2] !== 'O'))
                        && newSquaresArr[i - 3] === 'X'
                        && newSquaresArr[i - 2] === 'X'
                        && newSquaresArr[i - 1] === 'X'
                        && newSquaresArr[i + 1] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }
                    if (((newSquaresArr[i - 5] === 'O' && newSquaresArr[i + 1] !== 'O') ||
                        (newSquaresArr[i - 5] !== 'O' && newSquaresArr[i + 1] === 'O') ||
                        (newSquaresArr[i - 5] !== 'O' && newSquaresArr[i + 1] !== 'O'))
                        && newSquaresArr[i - 4] === 'X'
                        && newSquaresArr[i - 3] === 'X'
                        && newSquaresArr[i - 2] === 'X'
                        && newSquaresArr[i - 1] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }


                    //dọc
                    if (((newSquaresArr[i - 20] === 'O' && newSquaresArr[i + 100] !== 'O') ||
                        (newSquaresArr[i - 20] !== 'O' && newSquaresArr[i + 100] === 'O') ||
                        (newSquaresArr[i - 20] !== 'O' && newSquaresArr[i + 100] !== 'O'))
                        && newSquaresArr[i + 20] === 'X'
                        && newSquaresArr[i + 40] === 'X'
                        && newSquaresArr[i + 60] === 'X'
                        && newSquaresArr[i + 80] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 40] === 'O' && newSquaresArr[i + 80] !== 'O') ||
                        (newSquaresArr[i - 40] !== 'O' && newSquaresArr[i + 80] === 'O') ||
                        (newSquaresArr[i - 40] !== 'O' && newSquaresArr[i + 80] !== 'O'))
                        && newSquaresArr[i - 20] === 'X'
                        && newSquaresArr[i + 20] === 'X'
                        && newSquaresArr[i + 40] === 'X'
                        && newSquaresArr[i + 60] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 60] === 'O' && newSquaresArr[i + 60] !== 'O') ||
                        (newSquaresArr[i - 60] !== 'O' && newSquaresArr[i + 60] === 'O') ||
                        (newSquaresArr[i - 60] !== 'O' && newSquaresArr[i + 60] !== 'O'))
                        && newSquaresArr[i - 40] === 'X'
                        && newSquaresArr[i - 20] === 'X'
                        && newSquaresArr[i + 20] === 'X'
                        && newSquaresArr[i + 40] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 80] === 'O' && newSquaresArr[i + 40] !== 'O') ||
                        (newSquaresArr[i - 80] !== 'O' && newSquaresArr[i + 40] === 'O') ||
                        (newSquaresArr[i - 80] !== 'O' && newSquaresArr[i + 40] !== 'O'))
                        && newSquaresArr[i - 60] === 'X'
                        && newSquaresArr[i - 40] === 'X'
                        && newSquaresArr[i - 20] === 'X'
                        && newSquaresArr[i + 20] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 100] === 'O' && newSquaresArr[i + 20] !== 'O') ||
                        (newSquaresArr[i - 100] !== 'O' && newSquaresArr[i + 20] === 'O') ||
                        (newSquaresArr[i - 100] !== 'O' && newSquaresArr[i + 20] !== 'O'))
                        && newSquaresArr[i - 80] === 'X'
                        && newSquaresArr[i - 60] === 'X'
                        && newSquaresArr[i - 40] === 'X'
                        && newSquaresArr[i - 20] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }
                    //chéo phải
                    if (((newSquaresArr[i - 21] === 'O' && newSquaresArr[i + 105] !== 'O') ||
                        (newSquaresArr[i - 21] !== 'O' && newSquaresArr[i + 105] === 'O') ||
                        (newSquaresArr[i - 21] !== 'O' && newSquaresArr[i + 105] !== 'O'))
                        && newSquaresArr[i + 21] === 'X'
                        && newSquaresArr[i + 42] === 'X'
                        && newSquaresArr[i + 63] === 'X'
                        && newSquaresArr[i + 84] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }
                    if (((newSquaresArr[i - 42] === 'O' && newSquaresArr[i + 84] !== 'O') ||
                        (newSquaresArr[i - 42] !== 'O' && newSquaresArr[i + 84] === 'O') ||
                        (newSquaresArr[i - 42] !== 'O' && newSquaresArr[i + 84] !== 'O'))
                        && newSquaresArr[i - 21] === 'X'
                        && newSquaresArr[i + 21] === 'X'
                        && newSquaresArr[i + 42] === 'X'
                        && newSquaresArr[i + 63] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 63] === 'O' && newSquaresArr[i + 63] !== 'O') ||
                        (newSquaresArr[i - 63] !== 'O' && newSquaresArr[i + 63] === 'O') ||
                        (newSquaresArr[i - 63] !== 'O' && newSquaresArr[i + 63] !== 'O'))
                        && newSquaresArr[i - 42] === 'X'
                        && newSquaresArr[i - 21] === 'X'
                        && newSquaresArr[i + 21] === 'X'
                        && newSquaresArr[i + 42] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }


                    if (((newSquaresArr[i - 84] === 'O' && newSquaresArr[i + 42] !== 'O') ||
                        (newSquaresArr[i - 84] !== 'O' && newSquaresArr[i + 42] === 'O') ||
                        (newSquaresArr[i - 84] !== 'O' && newSquaresArr[i + 42] !== 'O'))
                        && newSquaresArr[i - 63] === 'X'
                        && newSquaresArr[i - 42] === 'X'
                        && newSquaresArr[i - 21] === 'X'
                        && newSquaresArr[i + 21] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 105] === 'O' && newSquaresArr[i + 21] !== 'O') ||
                        (newSquaresArr[i - 105] !== 'O' && newSquaresArr[i + 21] === 'O') ||
                        (newSquaresArr[i - 105] !== 'O' && newSquaresArr[i + 21] !== 'O'))
                        && newSquaresArr[i - 84] === 'X'
                        && newSquaresArr[i - 63] === 'X'
                        && newSquaresArr[i - 42] === 'X'
                        && newSquaresArr[i - 21] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }
                    //chéo trái
                    if (((newSquaresArr[i - 19] === 'O' && newSquaresArr[i + 95] !== 'O') ||
                        (newSquaresArr[i - 19] !== 'O' && newSquaresArr[i + 95] === 'O') ||
                        (newSquaresArr[i - 19] !== 'O' && newSquaresArr[i + 95] !== 'O'))
                        && newSquaresArr[i + 19] === 'X'
                        && newSquaresArr[i + 38] === 'X'
                        && newSquaresArr[i + 57] === 'X'
                        && newSquaresArr[i + 76] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }
                    if (((newSquaresArr[i - 38] === 'O' && newSquaresArr[i + 76] !== 'O') ||
                        (newSquaresArr[i - 38] !== 'O' && newSquaresArr[i + 76] === 'O') ||
                        (newSquaresArr[i - 38] !== 'O' && newSquaresArr[i + 76] !== 'O'))
                        && newSquaresArr[i - 19] === 'X'
                        && newSquaresArr[i + 19] === 'X'
                        && newSquaresArr[i + 38] === 'X'
                        && newSquaresArr[i + 57] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 57] === 'O' && newSquaresArr[i + 57] !== 'O') ||
                        (newSquaresArr[i - 57] !== 'O' && newSquaresArr[i + 57] === 'O') ||
                        (newSquaresArr[i - 57] !== 'O' && newSquaresArr[i + 57] !== 'O'))
                        && newSquaresArr[i - 38] === 'X'
                        && newSquaresArr[i - 19] === 'X'
                        && newSquaresArr[i + 19] === 'X'
                        && newSquaresArr[i + 38] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 76] === 'O' && newSquaresArr[i + 38] !== 'O') ||
                        (newSquaresArr[i - 76] !== 'O' && newSquaresArr[i + 38] === 'O') ||
                        (newSquaresArr[i - 76] !== 'O' && newSquaresArr[i + 38] !== 'O'))
                        && newSquaresArr[i - 57] === 'X'
                        && newSquaresArr[i - 38] === 'X'
                        && newSquaresArr[i - 19] === 'X'
                        && newSquaresArr[i + 19] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }

                    if (((newSquaresArr[i - 95] === 'O' && newSquaresArr[i + 19] !== 'O') ||
                        (newSquaresArr[i - 95] !== 'O' && newSquaresArr[i + 19] === 'O') ||
                        (newSquaresArr[i - 95] !== 'O' && newSquaresArr[i + 19] !== 'O'))
                        && newSquaresArr[i - 76] === 'X'
                        && newSquaresArr[i - 57] === 'X'
                        && newSquaresArr[i - 38] === 'X'
                        && newSquaresArr[i - 19] === 'X'
                    ) {
                        this.setState({
                            check: true
                        })
                        Swal.fire({
                            imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                            title: 'HAPPY',
                            text: 'X is winner :)',
                        })
                    }


                }
            }

        }
        else return;
    }

    handleClickReset() {
        this.setState({
            squares: Array(400).fill(null),
            xIsNext: true,
            check: false,
            sum: 0
        })
    }

    render() {
        var items = [];
        const itemss = [];
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        const sum = 'Number of rounds: ' + (this.state.sum);


        for (let index = 0; index < 20; index++) {
            const i = 20
            const lenght = 20 * (index + 1)

            for (let y = i * index; y < lenght; y++) {
                items.push(this.renderSquare(y))
            }
            itemss.push(
                <div className="board-row">
                    {items}
                </div>
            )
            items = []
        }
        return (
            <div class="shadow pl-3 pr-3 pb-3 mt-3 bg-white rounded status2">
                <div className="status1">
                    <h3>GAME CARRO</h3>
                    {itemss}
                </div>
                <div className="status3">
                    <h5><u>{status}</u></h5>
                    <br></br> 
                    <br></br>  
                    <h5><u>{sum}</u></h5>                     
                    <br></br>
                    <br></br>                     
                <button onClick={() => this.handleClickReset()} type="button" class="btn btn-success" >Restart game</button>
                </div>
            </div>

        );
    }
}