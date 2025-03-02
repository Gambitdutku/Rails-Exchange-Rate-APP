class CreatePrices < ActiveRecord::Migration[7.1]
  def change
    create_table :prices do |t|
      t.string :currency
      t.float :rate
      t.string :source

      t.timestamps
    end
  end
end
