# Code & documentation style guidelines

- Code blocks representing bad practices are marked with ❌ (read: "Don't:"), those representing good practices with ✔️ (read: "Do:").
- This guideline uses a two pseudo-languages, one object-oriented, one functional. The syntax is mostly inspired by Go, Dart and Haskell, but the guideline tries to be language- and paradigm-agnostic.




## Code



### Program design

#### *Conciseness is the most important aspect of readability.*

Only extract functions, classes or whatever when you use them multiple times.

*TODO: Add example for multiple uses (then extracting is highly encouraged)*

❌

    exampleFunction() {
        if condition {
            doEveryThing()
            return
        }
        doOtherThings()
    }

    /// This may increase readablity in the exampleFunction,
    /// but is drastically more verbose and readers have to switch
    /// between functions many times.
    doEverything() {
        doThings()
        doMoreThings()
        doCleanupThings()
    }


✔️

    exampleFunction() {
        if condition {
            doThings()
            doMoreThings()
            doCleanupThings()
            return
        }
        doOtherThings()
    }


Keep statements on one line when possible, or at least chain them together without duplication. Declare a variable when you want to use the value multiple times.

❌

    const firstParent = ParentType1()
    const secondParent = ParentType2()
    const child = firstParent.haveSex(secondParent)
    const wordGenerator = WordGenerator(options: wordGeneratorOptions)
    const firstWord = wordGenerator.getFirstWord()
    const secondWord = wordGenerator.getSecondWord()
    const thirdWord = wordGenerator.getThirdWord()
    const firstWords = firstWord ++ secondWord ++ thirdWord
    child.say(firstWords)
    child.kill()


✔️

    const wordGenerator = WordGenerator(options: wordGeneratorOptions)
    // Generates child and makes it speak three words, then kills it.
    ParentType1().haveSex(ParentType2())
        .say(
            wordGenerator.getFirstWord() ++
            wordGenerator.getSecondWord() ++
            wordGenerator.getThirdWord()
        )
        .kill()



## Formatting

Always indent by four spaces.