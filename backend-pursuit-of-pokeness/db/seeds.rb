brian = User.create!(name: 'Brian', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcrauly-8b5ebd2e-2fb3-4ba0-8e58-af63f76366aa.png/v1/fill/w_890,h_898,strp/soccer_ball_on_a_transparent_background__by_prussiaart_dcrauly-pre.png')


API = "https://pokeapi.co/api/v2/pokemon/"


k = 1
while k <= 151
    data = JSON.parse(RestClient.get("#{API}#{k}"))

    Pokemon.create(name: data['name'], kind: data['types'][0]['type']['name'], hp: data['stats'][-1]['base_stat'], region: 'kanto', front: data['sprites']['front_default'], back: data['sprites']['back_default'])
    k+=1
end

j = 152
while j <= 251
    data = JSON.parse(RestClient.get("#{API}#{j}"))

    Pokemon.create(name: data['name'], kind: data['types'][0]['type']['name'], hp: data['stats'][-1]['base_stat'], region: 'johto', front: data['sprites']['front_default'], back: data['sprites']['back_default'])
    j+=1
end

h = 252
while h <= 386
    data = JSON.parse(RestClient.get("#{API}#{h}"))

    Pokemon.create(name: data['name'], kind: data['types'][0]['type']['name'], hp: data['stats'][-1]['base_stat'], region: 'hoenn', front: data['sprites']['front_default'], back: data['sprites']['back_default'])
    h+=1
end

s = 387
while s <= 490
    data = JSON.parse(RestClient.get("#{API}#{s}"))

    Pokemon.create(name: data['name'], kind: data['types'][0]['type']['name'], hp: data['stats'][-1]['base_stat'], region: 'sinnoh', front: data['sprites']['front_default'], back: data['sprites']['back_default'])
    s+=1
end