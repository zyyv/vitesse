export const isDark = useDark()
// export const toggleDark = useDebounceFn(useToggle(isDark), 200)
export const toggleDark = useThrottleFn(() => { useToggle(isDark)() }, 2000)
