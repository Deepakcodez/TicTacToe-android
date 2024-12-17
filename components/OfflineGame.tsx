import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";

const OfflineGame = () => {
    const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null)); // Game board
    const [isXNext, setIsXNext] = useState(true); // Tracks whose turn it is
    const [winner, setWinner] = useState<string | null>(null); // Tracks the winner

    const handlePress = (index: number) => {
        // Prevent changing a square if game is over or square is filled
        if (winner || board[index]) return;

        // Update the board
        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);

        // Toggle turn
        setIsXNext(!isXNext);
    };

    const restartGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    };

    useEffect(() => {
        // Check for a winner after every move
        const gameWinner = calculateWinner(board);
        if (gameWinner) {
            setWinner(gameWinner);

            setTimeout(() => {
                restartGame()
            }, 5000);
        }
    }, [board]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe</Text>
            <View style={styles.board}>
                {board.map((value, index) => (
                    <Square key={index} value={value} onPress={() => handlePress(index)} />
                ))}
            </View>
            <View style={styles.info}>
                {winner ? (
                    <Text style={styles.status}>Winner: {winner}</Text>
                ) : (
                    <Text style={styles.status}>Next Player: {isXNext ? "X" : "O"}</Text>
                )}
                <Button title="Restart Game" onPress={restartGame} />
            </View>

            {/* Show Confetti when there is a winner */}
            {winner && <ConfettiCannon count={200} origin={{ x: 150, y: 0 }} />}
        </View>
    );
};

// Square component
type SquareProps = {
    value: string | null;
    onPress: () => void;
};

const Square: React.FC<SquareProps> = ({ value, onPress }) => {
    return (
        <TouchableOpacity style={styles.square} onPress={onPress}>
            <Text style={styles.squareText}>{value}</Text>
        </TouchableOpacity>
    );
};

// Function to check for a winner
const calculateWinner = (board: (string | null)[]): string | null => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let line of lines) {
        const [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
    },
    board: {
        width: 300,
        height: 300,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    square: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
    },
    squareText: {
        fontSize: 36,
        fontWeight: "bold",
    },
    info: {
        marginTop: 20,
        alignItems: "center",
    },
    status: {
        fontSize: 20,
        marginBottom: 10,
    },
});

export default OfflineGame;
