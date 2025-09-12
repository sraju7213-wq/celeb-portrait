/** Weighted random selection with optional recent exclusion */
export function weightedRandom(items, recent = new Set(), maxTries = 10) {
  const filtered = items.filter(it => !recent.has(it.value));
  const pool = filtered.length ? filtered : items;
  const total = pool.reduce((acc, it) => acc + (it.weight || 1), 0);
  const r = Math.random() * total;
  let sum = 0;
  for (const item of pool) {
    sum += item.weight || 1;
    if (r <= sum) return item.value;
  }
  return pool[0].value;
}

/** helper to update recent selections keeping finite size */
export function remember(recentMap, key, value, limit = 30) {
  const set = recentMap.get(key) || new Set();
  set.add(value);
  if (set.size > limit) {
    const first = set.values().next().value;
    set.delete(first);
  }
  recentMap.set(key, set);
}
