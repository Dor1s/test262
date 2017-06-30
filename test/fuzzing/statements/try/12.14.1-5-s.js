var isInstance = false;
        try {
            throw new Error("...");
        } catch (Arguments) {
            isInstance = Arguments instanceof Error;
        }
assert(isInstance);