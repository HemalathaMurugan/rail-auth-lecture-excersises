class User < ApplicationRecord
    has_many :dragons

    has_secure_password

end