const setIntersectionObserver = (
  options = {},
  target,
  onTargetEntry,
  onTargetLeave
) => {
  const { rootMargin = '0px', threshold = 0, root = null } = options;

  const wrappedCallback = (entries) => {
    let { isIntersecting } = entries[0];
    if (isIntersecting && onTargetEntry) {
      onTargetEntry();
    }
    if (!isIntersecting && onTargetLeave) {
      onTargetLeave();
    }
  };

  const scrollArea = document.getElementById(root) || null;
  const observer = new IntersectionObserver(wrappedCallback, {
    root: scrollArea,
    rootMargin,
    threshold,
  });
  const targetEl = document.getElementById(target);

  observer.observe(targetEl);
};

export default setIntersectionObserver;
