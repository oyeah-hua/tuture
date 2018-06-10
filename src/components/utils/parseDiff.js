import parser from 'gitdiff-parser';

const parseDiff = (text, options = {}) => {
    let files = parser.parse(text);

    return files.map(file => {
      const hunks = file.hunks.map(hunk => ({ ...hunk, isPlain: false }));

      return { ...file, hunks: hunks };
    });
};

export default parseDiff;