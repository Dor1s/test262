var isInstance = false;
        try {
            throw new Error("...");
        } catch (ARGUMENTS) {
            isInstance = ARGUMENTS instanceof Error;
        }
assert(isInstance);