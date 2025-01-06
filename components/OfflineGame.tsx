import React, { useState, useEffect, useRef, useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { GestureHandlerRootView,  } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView, } from '@gorhom/bottom-sheet';
import OfflineGameTurnIndicater from "./ui/OfflineGameTurnIndicater";
import DrawCard from "./ui/DrawCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const OfflineGame = () => {
    const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null)); // Game board
    const [boardColor, setBoardColor] = useState<string>("black");
    const [isXNext, setIsXNext] = useState(true); // Tracks whose turn it is
    const [winner, setWinner] = useState<string | null>(null); // Tracks the winner
    const [isDraw, setIsDraw] = useState(false); // Tracks if the game is a draw
    const [xpoints, setXpoints] = useState(0);
    const [opoints, setOpoints] = useState(0);
    const [showStats, setShowStats] = useState<-1 | 1>(-1);


    const bottomSheetRef = useRef<BottomSheet>(null);

    const handlePress = (index: number) => {
        // Prevent changing a square if game is over or square is filled
        if (winner || isDraw || board[index]) return;

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
        setIsDraw(false);
    };

    useEffect(() => {
        // Check for winner
        const gameWinner = calculateWinner(board);
        if (gameWinner) {
            setWinner(gameWinner);
            if (gameWinner === "X") {
                setXpoints(xpoints + 1);
            } else {
                setOpoints(opoints + 1);
            }
            setTimeout(() => {
                restartGame();
            }, 5000);
        } else if (findMatchDraw(board)) {
            setIsDraw(true);
            setTimeout(() => {
                restartGame();
            }, 2000);
        }
    }, [board]);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
        if (index == 1) {
            setShowStats(1);
        } else {
            setShowStats(-1);
        }
    }, []);

  

    return (
        <GestureHandlerRootView style={styles.rootContainer}>
            <View style={styles.container} className={`${boardColor}`}>
                {isDraw && <DrawCard />}
                <OfflineGameTurnIndicater isXNext={isXNext} />
                
                <View style={styles.gameArea}>
                    <View style={styles.board}>
                        {board.map((value, index) => (
                            <Square key={index} value={value} onPress={() => handlePress(index)} />
                        ))}
                    </View>
                    <View className="absolute" style={styles.info}>
                        {winner && (
                            <Text style={styles.winnerText}>{winner} WIN</Text>
                        )}
                    </View>

                </View>
                {/* Show Confetti when there is a winner */}
                {winner && <ConfettiCannon count={200} origin={{ x: 150, y: 0 }} />}
                <View className="flex flex-row justify-between items-center p-4">
                    <TouchableOpacity onPress={() => setShowStats(prev => prev === 1 ? -1 : 1)}>
                        <MaterialCommunityIcons name="dots-triangle" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={restartGame}>
                        <MaterialCommunityIcons name="restart" size={24} color="white" />
                    </TouchableOpacity>
                </View>

            </View>
            <BottomSheet
                ref={bottomSheetRef}
                index={showStats}
                snapPoints={["1%", "20%"]}
                onChange={handleSheetChanges}
                handleIndicatorStyle={{
                    backgroundColor: "#ccc",
                    width: 50,
                    height: 5,
                    borderRadius: 10,
                    alignSelf: "center",
                }}
            >
                <BottomSheetView style={styles.bottomSheetContent}>
                    <View >
                        <Text
                            className="text-6xl font-bold  "
                            style={{ color: "#c7c7c7", opacity: 30 }}>
                            {winner ? winner : 'No'} wins
                        </Text>
                        <Text>{xpoints} | {opoints}</Text>
                    </View>
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

// Square component
type SquareProps = {
    value: string | null;
    onPress: () => void;
};

const Square: React.FC<SquareProps> = ({ value, onPress }) => {
    return (
        <TouchableOpacity style={styles.square} className="bg-white/70" onPress={onPress}>
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

// Function to check for a draw
const findMatchDraw = (board: (string | null)[]): boolean => {
    return board.every((square) => square !== null) && !calculateWinner(board);
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    gameArea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
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
    winnerText: {
        fontSize: 64,
        fontWeight: "bold",
        color: "#4caf50",
        marginBottom: 10,
        textAlign: "center",
    },
    bottomSheetContent: {
        flex: 1,
        padding: 24,
    },
    textInput: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 8,
        marginTop: 16,
        borderRadius: 4,
    },
});

export default OfflineGame;
