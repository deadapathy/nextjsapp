type HuffmanNode = {
    char?: string;
    freq: number;
    left?: HuffmanNode;
    right?: HuffmanNode;
};

function buildHuffmanTree(freqMap: Map<string, number>): HuffmanNode {
    const nodes: HuffmanNode[] = [];

    freqMap.forEach((freq, char) => {
        nodes.push({ char, freq });
    });

    while (nodes.length > 1) {
        nodes.sort((a, b) => a.freq - b.freq);
        const left = nodes.shift()!;
        const right = nodes.shift()!;
        const newNode: HuffmanNode = {
            freq: left.freq + right.freq,
            left,
            right,
        };
        nodes.push(newNode);
    }

    return nodes[0];
}

function buildHuffmanCodes(node: HuffmanNode, prefix: string = ""): Map<string, string> {
    const codes: Map<string, string> = new Map();

    if (node.char) {
        codes.set(node.char, prefix);
    } else {
        const leftCodes = buildHuffmanCodes(node.left!, prefix + "0");
        leftCodes.forEach((code, char) => codes.set(char, code));
        const rightCodes = buildHuffmanCodes(node.right!, prefix + "1");
        rightCodes.forEach((code, char) => codes.set(char, code));
    }

    return codes;
}

function huffmanEncode(text: string): { encodedText: string; huffmanTree: HuffmanNode } {
    const charFreqMap = new Map<string, number>();
    for (const char of text) {
        charFreqMap.set(char, (charFreqMap.get(char) || 0) + 1);
    }

    const huffmanTree = buildHuffmanTree(charFreqMap);
    const huffmanCodes = buildHuffmanCodes(huffmanTree);

    let encodedText = "";
    for (const char of text) {
        encodedText += huffmanCodes.get(char)!;
    }

    return { encodedText, huffmanTree };
}

export function encodeHuffman(textToEncode: string) {
    const { encodedText } = huffmanEncode(textToEncode);

    return encodedText;
}
