export interface IProduct {
  id: number
  category: null | number
  name: string
  unit_id: number | null
  amount: number | null
  price: null | number
  imei: null | string
  original_name: null | string
  original_imei: null | string
  isMobileCategory: boolean
  label: string
  isTruthWorthy: boolean
}

// 'products.* amount' → ['required', 'integer', 'min:1'],
// 'products.* price' → ['required', 'integer', 'min:1'],
// 'products.* name' → ['required', 'string'],
// 'products.* label' → ['nullable', 'string', 'max: 250'],
// 'products.* imei' → ['nullable', 'numeric', 'digits:15'],
// 'products,* category' → ['nullable', Rule:: exists( table: 'catalog_categories', column: 'id')],
// 'products.* original_name' → ['nullable', 'string'],
// 'products.* original_imei' → ['nullable', 'numeric', 'digits:15'],
// 'products,* unit_id' → ['nullable', 'numeric', Rule::exists( table: 'units', column: 'id')],
// 'products.* product_id' → ['nullable', 'integer'],
// 'callback' → ['nullable', 'string']
