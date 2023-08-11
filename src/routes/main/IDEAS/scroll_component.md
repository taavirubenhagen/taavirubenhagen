elementData = {
    e1Opacity: (yP) => {
        const beginning = yP - 2;
        if (beginning < 0) {
            return 0;
        }
        if (beginning > 1) {
            return 1;
        }
        return beginning;
    },
    e2Visible: (yP) => yP - 3.5 > 1,
};