var isInstance = false;
        try {
            throw new Error("...");
        } catch (EVAL) {
            isInstance = EVAL instanceof Error;
        }
assert(isInstance);